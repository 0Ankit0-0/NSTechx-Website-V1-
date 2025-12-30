from pymongo import MongoClient
import os
from loguru import logger
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv('MONGO_URI')
DB_NAME = "nstechx_db"

client = None
db = None

def connect_to_mongo():
    global client, db
    if not MONGO_URI:
        logger.error("MONGO_URI environment variable is not set.")
        raise ValueError("MONGO_URI environment variable must be set")
    
    try:
        client = MongoClient(MONGO_URI)
        db = client[DB_NAME]
        logger.info("Connected to MongoDB.")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise

def close_mongo_connection():
    global client
    if client:
        client.close()
        logger.info("MongoDB connection closed.")

def get_database():
    global db
    if db is None:
        connect_to_mongo()
    return db

def insert_demo_request(demo_data: dict) -> str:
    """Insert a demo request into the database"""
    try:
        database = get_database()
        collection = database.demo_requests
        result = collection.insert_one(demo_data)
        inserted_id = str(result.inserted_id)
        logger.info(f"Demo request inserted with ID: {inserted_id}")
        return inserted_id
    except Exception as e:
        logger.error(f"Failed to insert demo request: {str(e)}")
        raise
