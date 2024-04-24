import "./contacts-section.css";
import Card from "../../Reusable/Card/Card";
import Btn from "../../Reusable/Btn/Btn";

const ContactsSection = () => {
  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <h1 className={"contacts-container-title"}>Contacts</h1>
        <div className="contacts-container-personal-information">
          <Card classes={"contacts-card"}>
            <div>Icon</div>
            <h3>Address</h3>
            <p>Portugal, Lisbon</p>
          </Card>
          <Card classes={"contacts-card"}>
            <div>Icon</div>
            <h3>Email</h3>
            <p>pat@exemple.com</p>
          </Card>
          <Card classes={"contacts-card"}>
            <div>Icon</div>
            <h3>Phone</h3>
            <p>+351 914 777 835</p>
          </Card>
          <Card classes={"contacts-card"}>
            <div>Icon</div>
            <h3>Freelance</h3>
            <p>Available</p>
          </Card>
        </div>
        <div className="contacts-container-form">
          <h2 className="contacts-form">Contact Form</h2>
          <form action="/submit" className="contacts-form">
            <div className="form-group-fullname">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" />
            </div>
            <div className="form-group-email">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group-message">
              <label htmlFor="message">Your message</label>
              <input type="text" className="form-control" id="message" />
            </div>
            <Btn type={"submit"} value="Submit">
              <p>Submit Message</p>
            </Btn>
          </form>
        </div>
      </div>
      <div className="contacts-container-image">
        <div className="contacts-image" />
      </div>
    </section>
  );
};

export default ContactsSection;
