# Poetry Meals

Poetry Meals is a full-stack web application for connecting food and poetry. Users can create an account, record meals they have eaten, write a poem about each meal, rate the meal, and manage their collection through a simple CRUD interface.

The application is intended for personal meal journaling and creative writing. It does not count calories or provide nutritional advice and should not be used for medical purposes.

## Features

- Create an account with an email and password
- Log in and log out securely
- Create meal entries
- Categorize meals as breakfast, lunch, dinner, or snack
- Record the date a meal was eaten
- Record whether a meal was homemade, ordered for delivery, or eaten at a restaurant
- List the main ingredients in a meal
- Rate meals from one to five stars
- Write a poem about each meal
- View saved meals
- Edit existing meal entries
- Delete meal entries
- View an authenticated user profile

## Tech Stack

- **HTML5:** Page structure and forms
- **CSS3:** Layout, styling, and responsive presentation
- **JavaScript:** Browser and server-side application logic
- **Node.js:** Runtime environment
- **Express:** Web server and routing
- **MongoDB:** Database for users and meal entries
- **Mongoose:** MongoDB object modeling
- **EJS:** Server-side page rendering
- **Passport:** User authentication and session management
- **bcrypt:** Password hashing
- **Bootstrap:** Login and profile page styling

## Visit Website: https://poetrymeals.onrender.com/

## Screenshots

- <img width="1086" height="341" alt="Screenshot 2026-10-30 at 11 34 51 AM" src="https://github.com/user-attachments/assets/7597e538-c03b-4bcb-ba03-f696ee9d05b1" /> 

##Installation

Installation
Clone the repository and move into the project directory:

git clone https://github.com/desithomas/poetry-meals.git
cd poetry-meals

Install the project dependencies:
npm install

Create a .env file in the project root and add the required environment variables:
MONGODB_URI=your-mongodb-connection-string
SESSION_SECRET=your-session-secret

Start the application:
npm start

The application runs on:
http://localhost:8080






