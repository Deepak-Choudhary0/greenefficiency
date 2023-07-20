# GreenEfficiency - Optimizing Energy Consumption for Buildings
GreenEfficiency is a web application built with Next.js, React, Chakra UI, and TypeScript that enables users to optimize energy consumption for buildings. It utilizes machine learning with Python, Flask, scikit-learn, pandas, and NumPy to provide personalized energy efficiency predictions based on user-uploaded CSV files containing energy consumption data.

## Key Features
- Upload Energy Consumption Data: Users can easily upload CSV files containing energy consumption data for lights and HVAC systems.
- Predict Energy Efficiency: After uploading the data, GreenEfficiency sends it to a Flask server, where the data is processed and used to train a machine learning model. The model's predictions are then sent back to the frontend and displayed in a graphical format for easy analysis.
- Remove Uploaded Data: Users can choose to remove the uploaded data from the system if needed.

## Screenshots
1. ### Home page ![Home page](https://github.com/Deepak-Choudhary0/greenefficiency/assets/114693662/5510511f-f6ea-4a87-bda7-62485a247f97)
2. ### Upload ![Upload](https://github.com/Deepak-Choudhary0/greenefficiency/assets/114693662/7bd833d1-71fd-4c10-9f2e-7ae6dc24cc76)
3. ### Graph ![Graph](https://github.com/Deepak-Choudhary0/greenefficiency/assets/114693662/6b0718c0-492a-4458-8845-aebc6c0058b0)

## Tech Stack
- Frontend: Next.js, React, Chakra UI, TypeScript

- Backend: Flask (Python)

- Machine Learning: scikit-learn, pandas, NumPy

## Data Format
Please ensure that your CSV files have the required columns for lights and HVAC energy consumption data. The format should be compatible with the machine learning model's input requirements.


## Installation
-  Clone the repository: git clone https://github.com/your-username/GreenEfficiency.git

### Frontend 
1. Go to directory `cd greenefficiency`
  
2. Install dependencies: npm install

3. Run the application: npm run dev

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend
1. Go to directory ``

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing
We welcome contributions from the community! If you'd like to contribute to GreenEfficiency, please follow our Contribution Guidelines.

## License
This project is licensed under the MIT License.
