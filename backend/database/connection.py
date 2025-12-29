import sqlite3
import os
from loguru import logger
from dotenv import load_dotenv

load_dotenv()

DATABASE_PATH = os.getenv('DATABASE_PATH', './nstechx.db')

def get_db_connection():
    """Get a SQLite connection"""
    try:
        conn = sqlite3.connect(DATABASE_PATH)
        conn.row_factory = sqlite3.Row  # Enable column access by name
        logger.info(f"Connected to database: {DATABASE_PATH}")
        return conn
    except Exception as e:
        logger.error(f"Failed to connect to database: {str(e)}")
        raise

def initialize_database():
    """Initialize database with required tables"""
    conn = get_db_connection()
    
    try:
        # Create demo_requests table
        conn.execute("""
            CREATE TABLE IF NOT EXISTS demo_requests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50) NOT NULL,
                work_email VARCHAR(255) NOT NULL,
                email_domain VARCHAR(255) NOT NULL,
                contact_number VARCHAR(15) NOT NULL,
                requirements TEXT NOT NULL,
                status VARCHAR(20) DEFAULT 'NEW',
                source VARCHAR(50) DEFAULT 'request-demo',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Create index on email for faster lookups
        conn.execute("""
            CREATE INDEX IF NOT EXISTS idx_work_email 
            ON demo_requests(work_email)
        """)
        
        # Create index on created_at for date-based queries
        conn.execute("""
            CREATE INDEX IF NOT EXISTS idx_created_at 
            ON demo_requests(created_at)
        """)
        
        conn.commit()
        logger.info("Database initialized successfully")
        
    except Exception as e:
        logger.error(f"Failed to initialize database: {str(e)}")
        raise
    finally:
        conn.close()

def insert_demo_request(demo_data: dict) -> int:
    """Insert a demo request into the database"""
    conn = get_db_connection()
    
    try:
        result = conn.execute("""
            INSERT INTO demo_requests (
                first_name, last_name, work_email, email_domain,
                contact_number, requirements, status, source
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            RETURNING id
        """, [
            demo_data['first_name'],
            demo_data['last_name'],
            demo_data['work_email'],
            demo_data['email_domain'],
            demo_data['contact_number'],
            demo_data['requirements'],
            'NEW',
            'request-demo'
        ]).fetchone()
        
        conn.commit()
        request_id = result[0]
        logger.info(f"Demo request inserted with ID: {request_id}")
        return request_id
        
    except Exception as e:
        logger.error(f"Failed to insert demo request: {str(e)}")
        raise
    finally:
        conn.close()

def get_demo_request_by_id(request_id: int) -> dict:
    """Retrieve a demo request by ID"""
    conn = get_db_connection()
    
    try:
        result = conn.execute("""
            SELECT * FROM demo_requests WHERE id = ?
        """, [request_id]).fetchone()
        
        if result:
            columns = [desc[0] for desc in conn.description]
            return dict(zip(columns, result))
        return None
        
    finally:
        conn.close()

def get_all_demo_requests(limit: int = 100, offset: int = 0) -> list:
    """Retrieve all demo requests with pagination"""
    conn = get_db_connection()
    
    try:
        results = conn.execute("""
            SELECT * FROM demo_requests 
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        """, [limit, offset]).fetchall()
        
        columns = [desc[0] for desc in conn.description]
        return [dict(zip(columns, row)) for row in results]
        
    finally:
        conn.close()