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

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/PatF3lix/Portfolio.git
cd Portfolio
```

### 2️⃣ Create Docker Network

Before starting the containers, create the external Docker network required by the setup:

```bash
docker network create nginx-proxy-manager_network
```
⚠️ Make sure this network name matches the one defined in your docker-compose.yml.

3️⃣ Run with Docker Compose (Recommended)

Make sure Docker and Docker Compose are installed.

   1. Build and start the containers:

      ```bash
      docker network create nginx-proxy-manager_network
      ```

   2. Check running containers:

      ```bash
      docker ps
      ```
   You should see:

      ```bash
      CONTAINER NAME       PORTS
      portfolio            0.0.0.0:3000->3000/tcp
      nodeMailer           ...
      ```
   3. Access the portfolio:
      Open your browser at:

      ```bash
      http://localhost:3000
      ```

   The backend (nodeMailer) will automatically handle the contact form emails.

   4️⃣  Run Locally without Docker (Optional)

      1. Backend

      ```bash
      cd backend-mailer
      npm install
      npm start
      ```

      Backend runs on http://localhost:5000 by default.

      2. Frontend

      ```bash
      cd my-portfolio
      npm install
      npm start
      ```

      Frontend runs on http://localhost:3000.
   
   5️⃣ Stop the Application

      If running with Docker:

      ```bash
      docker compose down
      ```

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
