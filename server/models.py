from app import db
from sqlalchemy.orm import validates
import re


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    @validates('email')
    def validate_email(self, key, email):
        if not re.search(r'^[^@]+@[^@]+\.[^@]+$', email):
            raise ValueError('Invalid email address.')
        return email

    @validates('password')
    def validate_password(self, key, password):
        if not re.search(r'^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])', password):
            raise ValueError('Password must include at least one number, special character, and uppercase letter.')
        return password

    def __repr__(self):
        return f'<name:{self.first_name} {self.last_name}, email: {self.email}'
