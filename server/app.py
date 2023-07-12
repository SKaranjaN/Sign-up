from flask import Flask, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import User  


migrate = Migrate(app, db)



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