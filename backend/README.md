# NSTechX Demo Request Backend API

A production-ready FastAPI backend for handling demo requests in a B2B SaaS product.

## Features

- **Input Validation**: Comprehensive validation using Pydantic models
- **Database Storage**: DuckDB for persistent data storage
- **Email Notifications**: SMTP-based email sending (with placeholders)
- **Clean Architecture**: Separated into routers, services, and database layers
- **Error Handling**: Proper HTTP status codes and error responses
- **CORS Support**: Configured for frontend integration

## Tech Stack

- **Framework**: FastAPI
- **Database**: DuckDB (file-based, embedded)
- **Email**: SMTP (with placeholders)
- **Validation**: Pydantic
- **ASGI Server**: Uvicorn

## Project Structure

```
backend/
├── app.py                 # Main FastAPI application
├── run.py                 # Development server script
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── models/
│   └── demo_request.py   # Pydantic models
├── routers/
│   └── demo.py           # API endpoints
├── services/
│   └── email_service.py  # Email sending service
└── database/
    └── connection.py     # Database connection and initialization
```

## Installation

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
    It's highly recommended to use a virtual environment to manage dependencies.

    *   On Windows:
        ```bash
        python -m venv venv
        venv\Scripts\activate
        ```
    *   On macOS/Linux:
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Configuration

This project uses a `.env` file to manage environment variables for security and portability.

1.  **Create a `.env` file** in the `backend` directory.
2.  **Add the following variables** to the file. Below is an example configuration:

    ```env
    # Application Environment: 'development' or 'production'
    # In 'development', CORS is open for localhost. In 'production', it's restricted.
    ENVIRONMENT=development

    # Logging Level: DEBUG, INFO, WARNING, ERROR, CRITICAL
    LOG_LEVEL=INFO

    # --- Database ---
    # Path to the DuckDB database file
    DATABASE_PATH=./verif_demo_requests.duckdb

    # --- Email Service (SMTP) ---
    # Your SMTP server address
    SMTP_SERVER=smtp.your-email-provider.com
    
    # Your SMTP server port (587 for TLS, 465 for SSL)
    SMTP_PORT=587

    # The email address the application sends from
    SENDER_EMAIL=you@your-domain.com

    # The password or app-specific password for the sender email account
    SENDER_PASSWORD=your-email-password

    # The internal email address that receives new demo request notifications
    INTERNAL_RECIPIENT=sales@your-company.com
    ```

## Running the Application

### Development Mode
```bash
python run.py
```

The API will be available at `http://localhost:8000`

### Production Mode
```bash
uvicorn app:app --host 0.0.0.0 --port 8000
```

## API Endpoints

### POST /api/request-demo
Handles demo request submissions.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "workEmail": "john.doe@company.com",
  "contactNumber": "+1234567890",
  "requirements": "Detailed description of requirements..."
}
```

**Response:**
```json
{
  "success": true
}
```

**Validation Rules:**
- `firstName`/`lastName`: 2-50 characters, letters and spaces only
- `workEmail`: Valid email, rejects free providers (gmail.com, yahoo.com, etc.)
- `contactNumber`: 10-15 digits, allows +, spaces, ()
- `requirements`: 20-1000 characters

## Database Schema

The `demo_requests` table includes:
- `id`: Auto-increment primary key
- `first_name`, `last_name`: Requester's name
- `work_email`: Normalized email address
- `email_domain`: Extracted domain
- `contact_number`: Phone number
- `requirements`: Requirements text
- `status`: Request status (NEW, CONTACTED, QUALIFIED, DISQUALIFIED)
- `source`: Always "request-demo"
- `created_at`: UTC timestamp

## Rate Limiting

Basic rate limiting can be added using FastAPI's dependencies or middleware like `slowapi`. Placeholder for implementation:

```python
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

# Add to app.py
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# Add to endpoint
@router.post("/request-demo", dependencies=[Depends(RateLimiter(times=5, seconds=60))])
```

## Security Considerations

- Never hardcode SMTP credentials
- Use environment variables for sensitive configuration
- Implement proper authentication/authorization for production
- Add request logging and monitoring
- Consider using a proper database for concurrent access in production

## Testing

Run the application and test the endpoint using tools like:
- curl
- Postman
- Frontend application

Example curl command:
```bash
curl -X POST "http://localhost:8000/api/request-demo" \
     -H "Content-Type: application/json" \
     -d '{
       "firstName": "John",
       "lastName": "Doe",
       "workEmail": "john.doe@company.com",
       "contactNumber": "+1234567890",
       "requirements": "We need AI-powered reconciliation for our banking operations."
     }'
```

## Production Deployment

- Use a production ASGI server like Gunicorn with Uvicorn workers
- Set up proper logging
- Configure environment variables
- Set up database backups
- Implement monitoring and alerting
- Use HTTPS in production

## License

This project is part of the Verif.ai B2B SaaS product.
