const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

//this needs to be changed to only accept requests from front end client.
app.use(cors());

//Nodemailer transport setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true,
});

// Route for sending email
app.post("/send-email", (req, res) => {
  const { fullName, email, message } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.FORWARD_ADDRESS,
    subject: "New Message from Portfolio",
    text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error", error);
      res.status(500).json({ success: false, message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
