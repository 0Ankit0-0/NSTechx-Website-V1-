# NStechX Website

> Modern RegTech platform for Banks and Financial Institutions - AI-driven reconciliation, settlement, and dispute management solutions.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

NStechX is a comprehensive web platform showcasing enterprise RegTech solutions for the Banking and Financial Services ecosystem. The platform features:

- **Verif.ai** - Intelligent reconciliation platform
- **Unified Lending Interface (ULI)** enablement
- **Fraud Risk Management Systems (FRMS)**
- Automated demo request system with email notifications

## 📁 Project Structure

```
nstechx/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── assets/          # Images, logos, static files
│   │   ├── components/      # Reusable UI components
│   │   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx         # Main app component
│   ├── public/             # Public static files
│   └── package.json
│
├── backend/                 # Node.js + Express backend
│   ├── index.js            # Main server file
│   ├── .env                # Environment variables (DO NOT COMMIT)
│   └── package.json
│
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **HTTP Client:** Fetch API

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Email Service:** Nodemailer (Gmail SMTP)
- **Validation:** express-validator
- **Environment:** dotenv

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Gmail Account** with App Password enabled (for email functionality)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nstechx.git
cd nstechx
```

### 2. Install Dependencies

**Install Frontend Dependencies:**
```bash
cd frontend
npm install
```

**Install Backend Dependencies:**
```bash
cd ../backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```bash
cd backend
touch .env
```

Add the following configuration (replace with your actual values):

```env
# SMTP Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=465
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password-here
INTERNAL_RECIPIENT=recipient@example.com

# Application Configuration
ENVIRONMENT=development
LOG_LEVEL=INFO
PORT=3000
```

> ⚠️ **Important:** Never commit the `.env` file to version control!

### 4. Set Up Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **App Passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `SENDER_PASSWORD` in `.env`

### 5. Run Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server will run on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend will run on http://localhost:5173
```

### 6. Open in Browser

Navigate to [http://localhost:5173](http://localhost:5173)

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
# From project root
vercel

# For production
vercel --prod
```

4. **Set Environment Variables in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all variables from `.env`:
     - `SMTP_SERVER`
     - `SMTP_PORT`
     - `SENDER_EMAIL`
     - `SENDER_PASSWORD`
     - `INTERNAL_RECIPIENT`
     - `ENVIRONMENT` (set to "production")

### Alternative: Manual Deployment

1. **Build Frontend:**
```bash
cd frontend
npm run build
```

2. **Upload to your hosting provider:**
   - Upload `frontend/dist` folder to static hosting
   - Deploy `backend/` folder to Node.js hosting
   - Configure environment variables

## 🔐 Environment Variables

### Backend Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_SERVER` | Gmail SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (465 for SSL) | `465` |
| `SENDER_EMAIL` | Gmail account for sending emails | `contact@nstechx.co.in` |
| `SENDER_PASSWORD` | Gmail App Password (16 chars) | `abcd efgh ijkl mnop` |
| `INTERNAL_RECIPIENT` | Email to receive demo requests | `team@nstechx.co.in` |
| `ENVIRONMENT` | Environment name | `development` or `production` |
| `LOG_LEVEL` | Logging level | `INFO` |
| `PORT` | Backend server port | `3000` |

### Frontend Variables (Optional)

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

For production, update to your deployed backend URL.

## ✨ Features

### Public Pages
- **Home** - Company overview and hero section
- **About** - Mission, vision, and company values
- **Products** - Verif.ai reconciliation platform details
- **Contact** - Office information and contact details
- **Request Demo** - Interactive demo request form

### Demo Request Form
- Client-side validation with Zod
- Server-side validation with express-validator
- Professional HTML email templates
- Real-time form feedback
- Mobile-responsive design

### Technical Features
- Fully responsive design (mobile-first)
- SEO optimized
- Smooth page transitions
- Accessibility compliant (WCAG 2.1)
- Fast page loads with Vite
- Type-safe with TypeScript

## 📚 API Documentation

### Endpoints

#### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-01-12T10:30:00.000Z"
}
```

#### Request Demo
```http
POST /api/request-demo
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "phone": "+91 9876543210",
  "company": "ABC Bank Ltd",
  "message": "Interested in Verif.ai platform demo"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully. We will contact you soon.",
  "messageId": "<unique-message-id>"
}
```

**Error Response:**
```json
{
  "success": false,
  "errors": ["Valid email is required"]
}
```

## 🐛 Troubleshooting

### Frontend Issues

**Issue: Port 5173 already in use**
```bash
# Kill the process using port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3001
```

**Issue: Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**Issue: SMTP authentication failed**

1. Verify Gmail App Password is correct
2. Ensure 2-Factor Authentication is enabled
3. Try generating a new App Password
4. Check if Gmail account has any security alerts

**Issue: Email not sending**

```bash
# Test SMTP connection
curl -X GET http://localhost:3000/api/health

# Check server logs for errors
npm run dev
```

**Issue: CORS errors**

- Ensure backend CORS is configured correctly
- Check `VITE_API_URL` in frontend `.env`
- Verify API URL in frontend requests

### Deployment Issues

**Issue: Vercel build fails**

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set in Vercel

**Issue: API routes not working on Vercel**

- Check `vercel.json` configuration
- Ensure backend environment variables are set
- Review Vercel function logs

## 🧪 Testing

### Test Backend API

```bash
# Health check
curl http://localhost:3000/api/health

# Test demo request
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

### Test Frontend

1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit demo request form
4. Check for successful API call (200 status)

## 📄 Scripts

### Frontend Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Scripts

```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**NStechX India Private Limited**

- **Email:** contactus@nstechx.co.in
- **Phone:** +91 7208814414
- **Address:** 002 – Bldg no. 1, Manorama Nagar, Thane – 400604, Maharashtra, India

## 📝 License

This project is proprietary software owned by NStechX India Private Limited.

---

