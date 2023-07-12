from faker import Faker

from app import app
from models import db, User

with app.app_context():
    
    fake = Faker()