# NSTechX Demo Request Backend API

A production-ready FastAPI backend for handling demo requests in a B2B SaaS product.

## Features

- **Input Validation**: Comprehensive validation using Pydantic models.
- **Database Storage**: PostgreSQL for robust and scalable data persistence.
- **Email Notifications**: SMTP-based email sending.
- **Clean Architecture**: Separated into routers, services, and database layers.
- **Error Handling**: Proper HTTP status codes and error responses.
- **CORS Support**: Configured for frontend integration.

## Tech Stack

- **Framework**: FastAPI
- **Database**: PostgreSQL
- **Dependencies**: `psycopg2-binary` for database connection.
- **Email**: Standard library `smtplib`.
- **Validation**: Pydantic
- **ASGI Server**: Uvicorn/Gunicorn

## Project Structure

```
backend/
├── app.py                 # Main FastAPI application
├── run.py                 # Development server script
├── requirements.txt       # Python dependencies
├── README.md              # This file
├── .env.example           # Example environment variables
├── models/
│   └── demo_request.py    # Pydantic models for request validation
├── routers/
│   └── demo.py            # API endpoints for demo requests
├── services/
│   └── email_service.py   # Email sending logic
└── database/
    └── connection.py      # PostgreSQL connection and CRUD functions
```

## Installation

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
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

This project uses a `.env` file to manage environment variables.

1.  **Create a `.env` file** in the `backend` directory by copying the example:
    ```bash
    cp .env.example .env
    ```

2.  **Set up PostgreSQL:**
    You need a running PostgreSQL instance. You can either install it locally or use a managed cloud service (like AWS RDS, Heroku Postgres, etc.).

    *   **Install PostgreSQL:** Follow the official instructions for your operating system.
    *   **Create a database:** Create a user and a database for this application. For example:
        ```sql
        CREATE DATABASE nstechx_db;
        CREATE USER nstechx_user WITH PASSWORD 'your_secure_password';
        GRANT ALL PRIVILEGES ON DATABASE nstechx_db TO nstechx_user;
        ```

3.  **Update the `.env` file** with your configuration:

    ```env
    # --- Database ---
    # Connection string for your PostgreSQL database.
    # Format: postgresql://[user]:[password]@[host]:[port]/[dbname]
    DATABASE_URL="postgresql://nstechx_user:your_secure_password@localhost:5432/nstechx_db"

    # --- Application Settings ---
    # Logging Level: DEBUG, INFO, WARNING, ERROR, CRITICAL
    LOG_LEVEL=INFO

    # --- Email Service (SMTP) ---
    SMTP_SERVER=smtp.your-email-provider.com
    SMTP_PORT=587
    SENDER_EMAIL=you@your-domain.com
    SENDER_PASSWORD=your-email-password
    INTERNAL_RECIPIENT=sales@your-company.com
    ```

## Running the Application

When you run the application for the first time, it will automatically create the necessary `demo_requests` table in the database specified by your `DATABASE_URL`.

### Development Mode
```bash
python run.py
```
The API will be available at `http://localhost:8000`. The interactive API documentation (Swagger UI) can be accessed at `http://localhost:8000/docs`.

### Production Mode
For production, use a process manager like Gunicorn to run the Uvicorn server.
```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:app --bind 0.0.0.0:8000
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

**Successful Response (200 OK):**
```json
{
  "message": "Demo request submitted successfully. We will be in touch shortly.",
  "request_id": 123
}
```

## Database Schema

The `demo_requests` table is created with the following columns:
- `id`: `SERIAL PRIMARY KEY`
- `first_name`, `last_name`: `VARCHAR(50)`
- `work_email`, `email_domain`: `VARCHAR(255)`
- `contact_number`: `VARCHAR(15)`
- `requirements`: `TEXT`
- `status`: `VARCHAR(20)` (Default: 'NEW')
- `source`: `VARCHAR(50)` (Default: 'request-demo')
- `created_at`: `TIMESTAMP WITH TIME ZONE` (Default: `CURRENT_TIMESTAMP`)

Indexes are automatically created on `work_email` and `created_at` for faster queries.
