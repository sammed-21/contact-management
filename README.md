# Contact Management App with Maps and Chart dashboard

This is a web application built using  React that allows users to manage contact information and Chars and Maps to see and covid information

## Getting Started

1. Clone this repository: `git clone https://github.com/sammed-21/account-management.git`
<!-- 2. Navigate to the project directory: `cd contact-management` -->
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser and visit: `http://localhost:5173/`

## Contact management

- Visit the homepage to see the list of Contact and their information.
- Click "Add Contact" to add a new customer.
- Click on a customer's name to view and update their details.
- Delete a customer by clicking the "Delete" button.
- Make use of Redux to store the contact data

###  APIs used to fetch the covid details.

| Endpoint                | Description                  | Method |
|-------------------------|------------------------------|--------|
| https://disease.sh/v3/covid-19/all                  | Get worldwide details fo covid cases            | GET   |
| https://disease.sh/v3/covid-19/countries             | Get the list of all countries covid details            | GET    |
| https://disease.sh/v3/covid-19/historical/all?lastdays=all            | Get the all the Historical covide case with date       | GET    |
 
## Maps and Charts

- Using the country endpoint getting all the historic details of covid cases with 
- A line graph showing the cases fluctuations using chart.js to show the current and history details in line graph

## Maps
- Using React Leaflet built a Map to show covid details of the particular country and a marker which popups when it is on the country with total number
of active, recovered cases and deaths in that particular country.





 



## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Redux
- react-leaflet 
- react-chartjs-2

## Credits

- This project was created by Sammed.