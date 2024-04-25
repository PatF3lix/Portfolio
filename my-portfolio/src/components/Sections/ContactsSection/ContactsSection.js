import "./contacts-section.css";
import Btn from "../../Reusable/Btn/Btn";
import { useState } from "react";

const ContactsSection = () => {
  const [name, setName] = useState("hello!");

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
            <br />
            <input type="text" name="name" id="name" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
            <label htmlFor="message">Your message</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <Btn classes={"btn"}>Submit</Btn>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
