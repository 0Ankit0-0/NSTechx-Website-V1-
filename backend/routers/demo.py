from fastapi import APIRouter, HTTPException, status
from models.demo_request import DemoRequestCreate
from services.email_service import EmailService
from database.connection import insert_demo_request
from datetime import datetime
from loguru import logger

router = APIRouter()
email_service = EmailService()

@router.post("/request-demo", status_code=status.HTTP_201_CREATED)
async def request_demo(demo_request: DemoRequestCreate):
    """
    Handle demo request form submission.
    Stores in database and sends confirmation emails.
    """
    try:
        logger.info(f"Received demo request from {demo_request.workEmail}")
        
        # Extract email domain
        email_domain = demo_request.workEmail.split('@')[1]
        
        # Prepare demo data
        demo_data = {
            'first_name': demo_request.firstName,
            'last_name': demo_request.lastName,
            'work_email': demo_request.workEmail,
            'email_domain': email_domain,
            'contact_number': demo_request.contactNumber,
            'requirements': demo_request.requirements,
            'created_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        # Insert into database
        try:
            request_id = insert_demo_request(demo_data)
            demo_data['id'] = request_id
            logger.info(f"Demo request saved to database with ID: {request_id}")
        except Exception as db_error:
            logger.error(f"Database error: {str(db_error)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save demo request"
            )
        
        # Send confirmation email to the user
        user_email_sent = email_service.send_auto_reply(demo_data)
        if not user_email_sent:
            logger.warning("Failed to send confirmation email to user")
        
        # Send notification to internal sales team
        internal_email_sent = email_service.send_internal_notification(demo_data)
        if not internal_email_sent:
            logger.warning("Failed to send internal notification email")
        
        logger.info(f"Demo request processed successfully for {demo_request.workEmail}")
        
        return {
            "success": True,
            "message": "Demo request submitted successfully",
            "data": {
                "id": request_id,
                "name": f"{demo_request.firstName} {demo_request.lastName}",
                "email": demo_request.workEmail,
                "timestamp": demo_data['created_at']
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error processing demo request: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred. Please try again."
        )