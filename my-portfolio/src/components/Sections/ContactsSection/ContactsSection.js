import "./contacts-section.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sendDataToBackend = async (values) => {
  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    throw new ErrorMessage("Failed to send message. Please try again.");
  }
};

const ContactsSection = () => {
  const handleSubmit = async (values) => {
    try {
      await sendDataToBackend(values);
      toast.success("Message sent successfully!");
    } catch (err) {
      toast.error("Failed to send message. Please try agian.");
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
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <Field type="text" name="fullName" />
                  <ErrorMessage name="fullName" component="div" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" />
                  <ErrorMessage name="message" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
