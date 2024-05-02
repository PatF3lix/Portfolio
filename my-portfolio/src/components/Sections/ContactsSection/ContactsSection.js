import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "./contacts-section.css";
import "react-toastify/dist/ReactToastify.css";

// Client-side code (e.g., in your React app)
const sendDataToBackend = async (values) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_HOST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err); // Logging the error for debugging purposes
    throw new ErrorMessage("Failed to send message. Please try again.");
  }
};

const handleSubmit = async (values) => {
  try {
    toast.success("Sending Message!");
    await sendDataToBackend(values);
    toast.success("Message sent successfully!");
  } catch (err) {
    toast.error("Failed to send message. Please try again.");
  }
};

const ContactsSection = () => {
  return (
    <section className="contact-section">
      <div className={"contact-container-intro"}>
        <h1 className={"contact-title"}>Contact</h1>
        <p className={"contact-text"}>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>
      <div className="contact-form-container">
        <ToastContainer
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
        {/* Form fields validation */}
        <Formik
          initialValues={{ fullName: "", email: "", message: "" }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string()
              .matches(/^[a-zA-Z ]*$/, "Full name must not contain numbers")
              .required("Full name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            message: Yup.string().required("Message is required"),
          })}
          onSubmit={handleSubmit}
        >
          {/* Form component*/}
          {({ isSubmitting }) => (
            <Form className="contact-form">
              <div className="form-field">
                <label htmlFor="fullName">Full Name</label>
                <Field type="text" name="fullName" />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error-text"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-text"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-text-textarea"
                />
              </div>
              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactsSection;
