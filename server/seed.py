from faker import Faker
from app import app
from models import db, User

with app.app_context():
    fake = Faker()

    for _ in range(30):
        user = User(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            password=fake.password(),
        )
        db.session.add(user)

    db.session.commit()