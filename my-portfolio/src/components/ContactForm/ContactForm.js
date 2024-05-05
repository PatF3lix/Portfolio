import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

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
    console.error(err);
    throw new ErrorMessage("Failed to send message. Please try again.");
  }
};

const handleSubmit = async (values, { resetForm }) => {
  try {
    toast.success("Sending Message!");
    await sendDataToBackend(values);
    toast.success("Message sent successfully!");
    resetForm();
  } catch (err) {
    toast.error("Failed to send message. Please try again.");
  }
};

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <ToastContainer
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
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
  );
};

export default ContactForm;
