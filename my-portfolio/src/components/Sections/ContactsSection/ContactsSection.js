import "./contacts-section.css";
import Btn from "../../Reusable/Btn/Btn";
import { useState } from "react";

const ContactsSection = () => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, message);
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
            <label htmlFor="name">FullName</label>
            <input
              value={fullName}
              onChange={(e) => setfullName(e.currentTarget.value)}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
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
