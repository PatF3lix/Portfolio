import "./contacts-section.css";
import Btn from "../../Reusable/Btn/Btn";
import { useState } from "react";

const ContactsSection = () => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      message,
    };

    //send data to backend
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      //here a message should be sent to the user alerting him that the message was sent
      //successfully
      console.log(result);
    } catch (err) {
      //here a message should be sent to the user alerting him that the message was not sent
      console.log(err);
    }
  };

  return (
    <section className="contact-section">
      <div className={"contact-container"}>
        <h1 className={"contact-container-title"}>Contact</h1>
        <p className={"contact-container-intro"}>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="contact-form-container">
          <form>
            <label htmlFor="name">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setfullName(e.currentTarget.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              placeholder="Your message goes here..."
            ></textarea>
            <br />
            <Btn clickAction={handleSubmit} classes={"btn"}>
              Submit
            </Btn>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
