import uvicorn
from loguru import logger

if __name__ == "__main__":
    logger.info("Starting NSTechX Demo Request API in development mode...")
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )

