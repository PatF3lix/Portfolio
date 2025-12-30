# My Portfolio

A personal portfolio built with a full-stack architecture. It consists of a **React.js** frontend and a **Node.js/Express.js** backend. The portfolio includes a contact form that sends emails using **Nodemailer**. The project is containerized using **Docker** for easy deployment.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Technologies](#technologies)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

### Clone the repository:
```bash
git clone https://github.com/PatF3lix/Portfolio.git
```

### Backend Setup:

1. Navigate ti the backend directory backend-mailer:
   cd backend-mailer
   
3. Install dependencies:
   npm install
   
5. Create a .env file in the backend directory with the following variables:
   EMAIL_ADDRESS=your-email@gmail.com
   EMAIL_PASSWORD=your-email-password
   FORWARD_ADDRESS=destination-email@gmail.com
   ALLOWED_IP_ADDRESS=your-server-ip-address

### FrontEnd Setup:

1. Navigate to the frontend directory my-portfolio
    cd my-portfolio
   
3. Install dependencies:
    npm install
   
5. Create a .env file in the my-portfolio fontend directory for any environment specific-variables if necessary.


### Docker Setup (Optional):

if you want to run both the backend and frontend using Docker, make sure you have Docker installed, and follow these steps:

1. Build the Docker images for both backend and frontend
   docker-compose build
   
2. Start the application
   docker-compose up

## Usage

1. Run the backend (Express server):
   npm start
   Note: the backend will be running on http://localhost:5000

2. Run the frontend
   npm start
   Note: the frontend will be running on http://localhost:3000

3. Open your browser and navigate to http://localhost:3000 to view your portfolio.
4. Use the Contact Form on the portfolio to send an email, which will be handled by the backend and forwarded to yours specified email address.


## Features

1. Contact Form: Allows visitors to send messages that are forwarded to your email via Nodemailer
2. React Frontend: Interactive UI Built using React.js Hooks, and CSS.
3. Backend: Simple Express server that handles the email logic
4. Dockerized: Both frontend and backend are containerized for easy deployment using Docker


## Technologies

Frontend:
  React.js for building the user interface.
  CSS for styling.
  ESLint for linting and code quality.
  Formik for handling forms and form validation.
  React Toastify for toast notifications.
  React Icons for icons.

Backend:
  Node.js with Express.js for the server.
  Nodemailer for sending emails.
  CORS to manage cross-origin requests.
  dotenv for managing environment variables.

Development Tools:
  Docker for containerization.
  ESLint for linting.

## Contributing

No contributions accepted at the moment. thank you 

## License

This project is for personal use only and is not licensed for distribution or modification.
