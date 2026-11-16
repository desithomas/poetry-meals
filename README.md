# Poetry Meals

Poetry Meals is a full-stack web application for connecting food and poetry. Users can create an account, record meals they have eaten, write a poem about each meal, rate the meal, and manage their collection through a simple CRUD interface. 

The application is intended for personal meal journaling and creative writing. It does not count calories or provide nutritional advice and should not be used for medical purposes.

## Tech Stack

* **HTML5:** Page structure and forms.
* **CSS3:** Layout, styling, and responsive presentation.
* **JavaScript:** Browser and server-side application logic.
* **Node.js:** Runtime environment.
* **Express:** Web server and routing.
* **MongoDB:** Database for users and meal entries.
* **Mongoose:** MongoDB object modeling.
* **EJS:** Server-side page rendering.
* **Passport:** User authentication and session management.
* **bcrypt:** Password hashing.
* **Bootstrap:** Login and profile page styling.


## Visit Website: 
https://poetrymeals.onrender.com/

<img width="1086" height="341" alt="Screenshot 2026-10-30 at 11 34 51 AM" src="https://github.com/user-attachments/assets/7597e538-c03b-4bcb-ba03-f696ee9d05b1" /> 

## Try it with a demo account: 
* **Email:** xqdrcxtngqkuefeohw@gonrr.net
* **Password:** password123

## How to Run Locally:

1. **Clone the repository and move into the project directory:**
```bash
git clone https://github.com/desithomas/poetry-meals.git
cd poetry-meals

```

2. **Install the project dependencies:**
```bash 
npm install
```

3. **Create your .env file:**
* Create a .env file in the project root and add the following keys. Please note that you will have to supply your own credentials when running locally. You will need a MongoDB connection string and a session secret.
```bash
MONGODB_URI=your-mongodb-connection-string
SESSION_SECRET=your-session-secret
```

4. **Start the application:**
```bash
npm start
```

5. **Local browser view:**
 * Go to http://localhost:8080

Viola! Now you can partake in a poetry meal.
