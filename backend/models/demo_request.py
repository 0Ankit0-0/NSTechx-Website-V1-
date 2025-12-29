from pydantic import BaseModel, EmailStr, Field, validator
from datetime import datetime
from typing import Optional

class DemoRequestCreate(BaseModel):
    """Model for creating a demo request"""
    firstName: str = Field(..., min_length=2, max_length=50)
    lastName: str = Field(..., min_length=2, max_length=50)
    workEmail: EmailStr
    contactNumber: str = Field(..., min_length=10, max_length=15)
    requirements: str = Field(..., min_length=20, max_length=1000)

    @validator('firstName', 'lastName')
    def validate_name(cls, v):
        if not v.replace(' ', '').isalpha():
            raise ValueError('Name should only contain letters and spaces')
        return v.strip()

    @validator('workEmail')
    def validate_work_email(cls, v):
        # Reject free email providers
        free_providers = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
        domain = v.split('@')[1].lower()
        if domain in free_providers:
            raise ValueError('Please use your work email address')
        return v.lower()

    @validator('contactNumber')
    def validate_contact_number(cls, v):
        # Remove spaces and validate format
        cleaned = v.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')
        if not cleaned.replace('+', '').isdigit():
            raise ValueError('Please enter a valid phone number')
        return v

class DemoRequestResponse(BaseModel):
    """Model for demo request response"""
    id: int
    first_name: str
    last_name: str
    work_email: str
    email_domain: str
    contact_number: str
    requirements: str
    status: str
    source: str
    created_at: datetime

    class Config:
        from_attributes = True