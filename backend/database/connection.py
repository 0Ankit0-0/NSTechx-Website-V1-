import psycopg2
import psycopg2.extras
import os
from loguru import logger
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')

def get_db_connection():
    """Get a PostgreSQL connection"""
    if not DATABASE_URL:
        logger.error("DATABASE_URL environment variable is not set.")
        raise ValueError("DATABASE_URL environment variable must be set")

    try:
        conn = psycopg2.connect(DATABASE_URL)
        logger.info("Connected to PostgreSQL database.")
        return conn
    except psycopg2.OperationalError as e:
        logger.error(f"Failed to connect to PostgreSQL database: {str(e)}")
        raise

def initialize_database():
    """Initialize database with required tables"""
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            # Create demo_requests table
            cur.execute("""
                CREATE TABLE IF NOT EXISTS demo_requests (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(50) NOT NULL,
                    last_name VARCHAR(50) NOT NULL,
                    work_email VARCHAR(255) NOT NULL,
                    email_domain VARCHAR(255) NOT NULL,
                    contact_number VARCHAR(15) NOT NULL,
                    requirements TEXT NOT NULL,
                    status VARCHAR(20) DEFAULT 'NEW',
                    source VARCHAR(50) DEFAULT 'request-demo',
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            # Create index on email for faster lookups
            cur.execute("""
                CREATE INDEX IF NOT EXISTS idx_work_email 
                ON demo_requests(work_email)
            """)
            
            # Create index on created_at for date-based queries
            cur.execute("""
                CREATE INDEX IF NOT EXISTS idx_created_at 
                ON demo_requests(created_at)
            """)
            
            conn.commit()
            logger.info("Database initialized successfully")
            
    except Exception as e:
        logger.error(f"Failed to initialize database: {str(e)}")
        conn.rollback()
        raise
    finally:
        conn.close()

def insert_demo_request(demo_data: dict) -> int:
    """Insert a demo request into the database"""
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO demo_requests (
                    first_name, last_name, work_email, email_domain,
                    contact_number, requirements, status, source
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
            """, (
                demo_data['first_name'],
                demo_data['last_name'],
                demo_data['work_email'],
                demo_data['email_domain'],
                demo_data['contact_number'],
                demo_data['requirements'],
                'NEW',
                'request-demo'
            ))
            
            request_id = cur.fetchone()[0]
            conn.commit()
            logger.info(f"Demo request inserted with ID: {request_id}")
            return request_id
            
    except Exception as e:
        logger.error(f"Failed to insert demo request: {str(e)}")
        conn.rollback()
        raise
    finally:
        conn.close()

def get_demo_request_by_id(request_id: int) -> dict:
    """Retrieve a demo request by ID"""
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
            cur.execute("SELECT * FROM demo_requests WHERE id = %s", (request_id,))
            result = cur.fetchone()
            return dict(result) if result else None
    finally:
        conn.close()

def get_all_demo_requests(limit: int = 100, offset: int = 0) -> list:
    """Retrieve all demo requests with pagination"""
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
            cur.execute(
                "SELECT * FROM demo_requests ORDER BY created_at DESC LIMIT %s OFFSET %s",
                (limit, offset)
            )
            results = cur.fetchall()
            return [dict(row) for row in results]
    finally:
        conn.close()