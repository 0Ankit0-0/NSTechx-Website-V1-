from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import demo
from database.connection import initialize_database
from loguru import logger
import sys
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Define environment
environment = os.getenv('ENVIRONMENT', 'development')

# Configure Loguru
log_level = os.getenv('LOG_LEVEL', 'INFO')
logger.remove()  # Remove default handler
logger.add(
    sys.stdout,
    colorize=True,
    format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
    level=log_level
)
logger.add(
    "logs/app_{time:YYYY-MM-DD}.log",
    rotation="1 day",
    retention="30 days",
    level=log_level,
    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}"
)

# Create FastAPI app
app = FastAPI(
    title="NSTechX Demo Request API",
    description="API for handling demo requests with email notifications and database storage",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

allowed_origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
    "https://ns-techx-website-v1.vercel.app",
    "https://nstechx-website-v1.onrender.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database on startup
@app.on_event("startup")
async def startup_event():
    logger.info("Starting NStechX Demo Request API...")
    try:
        initialize_database()
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize database: {str(e)}")
        raise

# Include routers
app.include_router(demo.router, prefix="/api", tags=["Demo Requests"])

@app.get("/", tags=["Health"])
async def root():
    """Root endpoint"""
    return {
        "message": "NStechX Demo Request API",
        "status": "active",
        "version": "1.0.0",
        "endpoints": {
            "demo_request": "/api/request-demo",
            "docs": "/docs",
            "health": "/health"
        }
    }

@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "environment": environment
    }

if __name__ == "__main__":
    import uvicorn
    logger.info("Starting server...")
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True if environment == 'development' else False
    )