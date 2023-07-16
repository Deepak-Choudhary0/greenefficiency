import pandas as pd
from sklearn.linear_model import LinearRegression
from datetime import datetime
import pickle
# Load the energy consumption data from CSV
df = pd.read_csv('../../data.csv')

# Convert the Timestamp column to datetime format
df['Timestamp'] = pd.to_datetime(df['Timestamp'])

# Extract the hour of the day as a new column
df['Hour'] = df['Timestamp'].dt.hour

# Split the data into features (hour of the day) and target (energy consumption)
X = df[['Hour']]
y = df['Energy_Consumption']

# Train a linear regression model
model = LinearRegression()
model.fit(X, y)

# Generate timestamps for prediction
start_timestamp = df['Timestamp'].iloc[-1]
end_timestamp = start_timestamp + pd.DateOffset(hours=24)
prediction_timestamps = pd.date_range(start=start_timestamp, end=end_timestamp, freq='H')

# Extract the hour of the day from the prediction timestamps
prediction_hours = prediction_timestamps.hour.values.reshape(-1, 1)

# Make predictions for energy consumption
predictions = model.predict(prediction_hours)

# Create a new DataFrame for the predicted energy consumption
prediction_df = pd.DataFrame({
    'Timestamp': prediction_timestamps,
    'Energy_Consumption_Prediction': predictions
})

# Print the predicted energy consumption
print(prediction_df)

# Save the prediction DataFrame to a CSV file
prediction_df.to_csv('../../energy_prediction.csv', index=False)

pickle.dump(model,open('model.pkl','wb'))
model = pickle.load(open('model.pkl','rb'))