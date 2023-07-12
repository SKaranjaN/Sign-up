from faker import Faker
from app import app
from models import db, User
import re

with app.app_context():
    fake = Faker()

    for _ in range(30):
        password = fake.password(
            length=10,
            special_chars=True,
            digits=True,
            upper_case=True
        ) 

        try:
            user = User(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email(),
                password=password,
            )
            db.session.add(user)
        except ValueError as e:
            (f"Password validation error: {str(e)}")

    db.session.commit()