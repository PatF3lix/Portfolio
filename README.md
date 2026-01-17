# My Portfolio

A **full-stack personal portfolio** designed to showcase projects, skills, and professional experience. It features a **modern React.js frontend** with a clean and interactive user interface, and a **Node.js/Express.js backend** that powers the contact form functionality using **Nodemailer**.  

The entire application is **containerized using Docker**, allowing for consistent, reliable deployment across environments. This project demonstrates best practices in **frontend-backend integration**, environment configuration, and containerized development workflows.  

**Highlights of the portfolio include:**  
- **Interactive Contact Form** – Visitors can send messages directly from the portfolio, forwarded securely to your email.  
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices.  
- **Dockerized Architecture** – Easily run and deploy the frontend and backend using Docker Compose.  
- **Full-Stack Integration** – Demonstrates seamless communication between React frontend and Node/Express backend.  

> This project serves as a professional showcase of web development, backend integration, and deployment practices using modern web technologies.

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Contributing](#contributing)
7. [License](#license)

## Requirements

Before starting, make sure your system meets the following requirements:

### Software
- **Node.js** v16+ (includes npm)
- **npm** (Node Package Manager)
- **Docker** (optional, required for Docker-based setup)
- **Docker Compose** (optional, required for Docker-based setup)

### Accounts / Services
- An **email account** (e.g., Gmail) for the contact form to send emails
- Optional: server IP address for allowed connections in backend

> ⚠️ Ensure you have all required software installed and environment variables prepared before proceeding to installation.

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
