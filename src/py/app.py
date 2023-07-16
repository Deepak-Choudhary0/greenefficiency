import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import numpy as np
from datetime import datetime, timedelta
import pandas as pd

app = Flask(__name__)
CORS(app)

model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def hello():
    return 'Hello world!'

@app.route('/data', methods=['GET'])
def get_data():
    # Load the data from the model
    # data = {'csv_data': ' '.join(model['csv_data'])}  # Replace 'csv_data' with the actual variable name in your model
    return pd.read_csv('../../energy_prediction.csv').to_json(orient='records')

@app.route('/predict', methods=['GET'])
def predict():
    # Get the payload from the user
    # payload = request.get_json()
    payload = pd.read_csv('../../data.csv')

    # Convert the Timestamp column to datetime format
    payload['Timestamp'] = pd.to_datetime(payload['Timestamp'])

    # Extract the hour of the day as a new column
    payload['Hour'] = payload['Timestamp'].dt.hour


    # Split the data into features (hour of the day) and target (energy consumption)
    X = payload[['Hour']]
    # y = payload['Energy_Consumption']

    # Send the payload to the energy model and get the result
    result = model.predict(X)  # Replace with your energy model prediction code
    # Add one day to each date

    payload['Timestamp'] = payload['Timestamp'] + timedelta(days=1)
    # Convert the NumPy ndarray to a list
    result_list = result.tolist()
    # Prepare the response
    response = {'message': 'Data submitted successfully','X':X.to_dict(),'time':payload['Timestamp'].to_dict(),'Length':len(result_list), 'result': result_list}

    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
