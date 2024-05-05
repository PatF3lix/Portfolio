import React from "react";
import "./contacts-section.css";
import ContactIntro from "../../ContactIntro/ContactIntro";
import ContactForm from "../../ContactForm/ContactForm";

const ContactsSection = () => {
  return (
    <section className="contact-section">
      <ContactIntro />
      <ContactForm />
    </section>
  );
};

export default ContactsSection;
