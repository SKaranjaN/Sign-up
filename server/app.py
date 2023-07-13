from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from config import Config
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import User

api = Api(app)


class Index(Resource):

    def get(self):
        response_dict = {
            "message" : "Karibu sana"
        }
        response = make_response(
            response_dict,
            200
        )
        return response
api.add_resource(Index, "/")

class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        response = make_response(
            jsonify(users),
            200
            )

        return response
    
    def post(self):
        try:
            new_user = User(
                first_name=request.form['first_name'],
                last_name=request.form['last_name'],
                email=request.form['email'],
                password=request.form['password']
            )
            db.session.add(new_user)
            db.session.commit()

            response_dict = new_user.to_dict()
            response = make_response(response_dict, 201)
            return response

        except IntegrityError:
            db.session.rollback()
            response = make_response('Email already exists', 409)  # 409: Conflict
            return response

        except Exception as e:
            db.session.rollback()
            response = make_response(str(e), 500)  # 500: Internal Server Error
            return response
api.add_resource(Users, "/users")

class Login(Resource):
    def post(self):
        try:
            email = request.json.get('email')
            password = request.json.get('password')

            user = User.query.filter_by(email=email).first()

            if user and user.password == password:
                response_dict = {"token": "your_token_here"}
                response = make_response(response_dict, 200)
            else:
                response = make_response('Invalid email or password', 401)

            return response

        except Exception as e:
            response = make_response(str(e), 500)
            return response


api.add_resource(Login, "/users/login")

class User_by_Id(Resource):

    def get(self, id):
        response_dict = User.query.filter_by(id=id).first().to_dict()
        response = make_response(response_dict, 200)
        
        return response
    
    def patch(self, id):
        updated_one = User.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(updated_one, attr, request.form[attr])

        db.session.add(updated_one)
        db.session.commit()

        response_dict = updated_one.to_dict()
        response = make_response(response_dict, 200)

        return response
    
    def delete(self, id):
        selected_one = User.query.filter_by(id=id).first()
        
        db.session.delete(selected_one)
        db.session.commit()

        response_dict = {"message": "Delete successfull"}
        response = make_response(
            jsonify(response_dict),
            200
        )
        return response

api.add_resource(User_by_Id, "/users/<int:id>")