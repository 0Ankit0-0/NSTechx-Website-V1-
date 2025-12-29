import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import os
from dotenv import load_dotenv
from loguru import logger

load_dotenv()

class EmailService:
    """
    Email service for sending notifications via SMTP.
    Configured via environment variables for security.
    """

    def __init__(self):
        # SMTP Configuration from environment variables
        self.smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        self.smtp_port = int(os.getenv('SMTP_PORT', '587'))
        self.sender_email = os.getenv('SENDER_EMAIL')
        self.sender_password = os.getenv('SENDER_PASSWORD')
        self.internal_recipient = os.getenv('INTERNAL_RECIPIENT', 'sales@company.com')
        
        # Validate required environment variables
        if not self.sender_email or not self.sender_password:
            logger.warning("SENDER_EMAIL and SENDER_PASSWORD not set - emails will not be sent")
            self.email_enabled = False
        else:
            self.email_enabled = True
            logger.info("Email service initialized successfully")

    def send_internal_notification(self, demo_data: Dict[str, Any]) -> bool:
        """
        Send internal notification email to sales team.
        """
        if not self.email_enabled:
            logger.warning("Email service not configured - skipping internal notification")
            return False
            
        try:
            msg = MIMEMultipart()
            msg['From'] = self.sender_email
            msg['To'] = self.internal_recipient
            msg['Subject'] = f"🔔 New Demo Request from {demo_data['first_name']} {demo_data['last_name']}"

            body = f"""
New Demo Request Received
{'=' * 50}

Full Name: {demo_data['first_name']} {demo_data['last_name']}
Work Email: {demo_data['work_email']}
Email Domain: {demo_data['email_domain']}
Phone Number: {demo_data['contact_number']}

Requirements:
{demo_data['requirements']}

Timestamp: {demo_data['created_at']}
Request ID: {demo_data.get('id', 'N/A')}

{'=' * 50}
⏰ Please follow up within 24 hours.

--
Verif.ai Demo Request System
"""
            msg.attach(MIMEText(body, 'plain'))

            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.sender_email, self.sender_password)
            text = msg.as_string()
            server.sendmail(self.sender_email, self.internal_recipient, text)
            server.quit()

            logger.info(f"Internal notification email sent to {self.internal_recipient}")
            return True

        except Exception as e:
            logger.error(f"Failed to send internal notification: {str(e)}")
            return False

    def send_auto_reply(self, demo_data: Dict[str, Any]) -> bool:
        """
        Send auto-reply confirmation email to the user.
        """
        if not self.email_enabled:
            logger.warning("Email service not configured - skipping auto-reply")
            return False
            
        try:
            msg = MIMEMultipart()
            msg['From'] = self.sender_email
            msg['To'] = demo_data['work_email']
            msg['Subject'] = "✅ Thank you for your demo request - Verif.ai"

            body = f"""
Dear {demo_data['first_name']},

Thank you for your interest in Verif.ai!

We have received your demo request and our team will contact you within 24 hours to schedule a personalized demonstration of our AI-driven reconciliation and compliance solutions.

Your request details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Name: {demo_data['first_name']} {demo_data['last_name']}
- Email: {demo_data['work_email']}
- Phone: {demo_data['contact_number']}
- Requirements: {demo_data['requirements'][:100]}{'...' if len(demo_data['requirements']) > 100 else ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you have any immediate questions, please don't hesitate to contact us:
📧 Email: contactus@nstechx.co.in
📞 Phone: 7208814414

Best regards,
The Verif.ai Team
NSTechX

--
This is an automated confirmation email. Please do not reply to this message.
"""
            msg.attach(MIMEText(body, 'plain'))

            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.sender_email, self.sender_password)
            text = msg.as_string()
            server.sendmail(self.sender_email, demo_data['work_email'], text)
            server.quit()

            logger.info(f"Auto-reply email sent to {demo_data['work_email']}")
            return True

        except Exception as e:
            logger.error(f"Failed to send auto-reply: {str(e)}")
            return False