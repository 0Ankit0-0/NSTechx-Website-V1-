# NStechX Backend API

Node.js + Express backend API for handling demo requests and email notifications.

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **express-validator** - Request validation
- **dotenv** - Environment configuration

## 📁 Project Structure

```
backend/
├── index.js           # Main server file
├── .env              # Environment variables (DO NOT COMMIT)
├── .env.example      # Example env file
├── package.json      # Dependencies
├── package-lock.json
└── README.md         # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gmail account with App Password

### Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### Running Locally

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Configuration

### Required Variables

Create `.env` file in backend root:

```env
# SMTP Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=465
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password-here
INTERNAL_RECIPIENT=recipient@nstechx.co.in

# Application Configuration
ENVIRONMENT=development
LOG_LEVEL=INFO
PORT=3000
```

### Setting Up Gmail App Password

1. **Enable 2-Factor Authentication:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the 16-character password
   - Paste into `SENDER_PASSWORD` in `.env`

3. **Security Notes:**
   - App Passwords bypass 2FA for specific apps
   - Treat them like regular passwords
   - Revoke if compromised
   - Never commit to Git

## 📚 API Documentation

### Base URL

```
Local: http://localhost:3000
Production: https://your-domain.com
```

### Endpoints

#### 1. Health Check

Check if API is running.

```http
GET /api/health
```

**Response: 200 OK**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-01-12T10:30:00.000Z"
}
```

**Example:**
```bash
curl http://localhost:3000/api/health
```

---

#### 2. Request Demo

Submit a demo request and send email notification.

```http
POST /api/request-demo
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "phone": "+91 9876543210",
  "company": "ABC Bank Ltd",
  "message": "Interested in Verif.ai platform demo for our reconciliation needs."
}
```

**Field Validation:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | string | Yes | Min 1 char |
| `email` | string | Yes | Valid email format |
| `phone` | string | No | 10-15 digits |
| `company` | string | No | Any string |
| `message` | string | Yes | Min 1 char |

**Success Response: 200 OK**
```json
{
  "success": true,
  "message": "Demo request submitted successfully. We will contact you soon.",
  "messageId": "<unique-message-id@gmail.com>"
}
```

**Error Response: 400 Bad Request**
```json
{
  "success": false,
  "errors": [
    "Valid email is required",
    "Message is required"
  ]
}
```

**Error Response: 500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to send demo request. Please try again later.",
  "error": "SMTP connection failed" // Only in development
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/api/request-demo \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@company.com",
    "phone": "+91 9876543210",
    "company": "ABC Bank Ltd",
    "message": "Request for product demo"
  }'
```

## 📧 Email Templates

### Demo Request Email

Sent to `INTERNAL_RECIPIENT` when form is submitted.

**Subject:** `New Demo Request from [Name]`

**HTML Template Features:**
- Professional branded design
- Color-coded sections
- Responsive layout
- All form data included
- Timestamp with IST timezone
- Reply-to set to user's email

**Plain Text Fallback:**
Also includes plain text version for email clients that don't support HTML.

## 🔒 Security

### Input Validation

All inputs are validated and sanitized:

```javascript
body('name').trim().escape()
body('email').normalizeEmail()
body('phone').trim().escape()
body('message').trim().escape()
```

### CORS Configuration

Configured to accept requests from any origin:

```javascript
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
```

For production, update to specific origins:

```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://your-frontend-domain.com');
  // ...
});
```

### Environment Variables

- Never commit `.env` to Git
- `.env` is in `.gitignore`
- Use different credentials for dev/prod
- Rotate App Passwords regularly

## 🐛 Error Handling

### Server Errors

All errors are caught and logged:

```javascript
try {
  await transporter.sendMail(mailOptions);
} catch (error) {
  console.error('Error sending email:', error);
  res.status(500).json({
    success: false,
    message: 'Failed to send demo request.',
    error: process.env.ENVIRONMENT === 'development' ? error.message : undefined
  });
}
```

### Common Errors

**1. SMTP Authentication Failed**

```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

**Solutions:**
- Verify App Password is correct
- Ensure 2FA is enabled
- Generate new App Password
- Check for typos in `.env`

**2. Connection Timeout**

```
Error: Connection timeout
```

**Solutions:**
- Check internet connection
- Verify SMTP server and port
- Check firewall settings
- Try port 587 instead of 465

**3. Invalid Email Address**

```
Error: Invalid email address
```

**Solutions:**
- Verify email format
- Check for whitespace
- Ensure proper domain

## 🧪 Testing

### Manual Testing

**1. Test Health Endpoint:**
```bash
curl http://localhost:3000/api/health
```

Expected output:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-01-12T10:30:00.000Z"
}
```

**2. Test Demo Request:**
```bash
curl -X POST http://localhost:3000/api/request-demo \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 9876543210",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

**3. Test Validation:**
```bash
# Invalid email
curl -X POST http://localhost:3000/api/request-demo \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "invalid-email",
    "message": "Test"
  }'
```

Expected: 400 error with validation messages

### Using Postman

1. Import API endpoints
2. Set up environment variables
3. Test each endpoint
4. Check email delivery

### Checking Logs

```bash
# Development mode with detailed logs
npm run dev

# Production mode
npm start

# Watch logs in real-time
tail -f logs/app.log  # if logging to file
```

## 🚀 Deployment

### Deploy to Vercel

1. **Ensure `vercel.json` is configured** (in project root)

2. **Set Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env`

3. **Deploy:**
```bash
vercel --prod
```

### Deploy to Heroku

1. **Create Heroku app:**
```bash
heroku create nstechx-api
```

2. **Set environment variables:**
```bash
heroku config:set SMTP_SERVER=smtp.gmail.com
heroku config:set SMTP_PORT=465
heroku config:set SENDER_EMAIL=your-email@gmail.com
heroku config:set SENDER_PASSWORD=your-app-password
heroku config:set INTERNAL_RECIPIENT=recipient@nstechx.co.in
heroku config:set ENVIRONMENT=production
```

3. **Deploy:**
```bash
git push heroku main
```

### Deploy to Railway

1. **Connect GitHub repository**
2. **Set environment variables in dashboard**
3. **Deploy automatically on push**

## 📊 Monitoring

### Server Logs

Monitor server activity:

```bash
# Console logs
npm run dev

# Production logs
pm2 logs  # if using PM2
```

### Email Delivery

Check email delivery in Gmail:
- Sent folder
- SMTP logs
- Delivery reports

### Performance

Monitor:
- Response times
- Error rates
- Email delivery success rate
- API usage

## 🔧 Troubleshooting

### Server Won't Start

```bash
# Check if port is in use
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

### SMTP Not Working

1. **Verify credentials:**
```bash
# Test SMTP connection
npm install -g smtp-test
smtp-test --host smtp.gmail.com --port 465 --user your-email@gmail.com --pass your-app-password
```

2. **Check firewall:**
- Ensure port 465 (or 587) is not blocked
- Check corporate firewall rules

3. **Try alternative port:**
```env
SMTP_PORT=587
# In code: secure: false for port 587
```

### Environment Variables Not Loading

```bash
# Verify .env file exists
ls -la .env

# Check file contents
cat .env

# Verify dotenv is loaded
# Should be at top of index.js:
require('dotenv').config();
```

## 📜 Scripts

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

**Install nodemon for development:**
```bash
npm install -D nodemon
```

## 🔄 API Versioning

Current version: **v1**

For future versions:

```javascript
// v1 routes
app.post('/api/v1/request-demo', handler);

// v2 routes (future)
app.post('/api/v2/request-demo', handlerV2);
```

## 📝 Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.7",
    "express-validator": "^7.0.1",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

## 🤝 Contributing

1. Follow existing code style
2. Add error handling for new features
3. Update documentation
4. Test thoroughly before committing

## 📧 Support

For backend issues, contact:
- **Email:** contactus@nstechx.co.in
- **Phone:** +91 7208814414

---

Built with Node.js + Express