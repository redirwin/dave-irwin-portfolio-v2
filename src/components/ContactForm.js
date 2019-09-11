import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function ContactForm({ values, errors, touched }) {
  return (
    <ContactFormWrapper>
      <Form>
        <div className="field-wrapper">
          <Field type="text" name="name" />
          {touched.name && errors.name && <p>{errors.name}</p>}
        </div>
        <div className="field-wrapper">
          <Field type="email" name="email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>

        <div className="field-wrapper">
          <Field
            component="textarea"
            type="text"
            name="message"
            placeholder="Message"
          />
          {touched.message && errors.message && <p>{errors.message}</p>}
        </div>
        <div className="send">
          <button>Send</button>
        </div>
      </Form>
    </ContactFormWrapper>
  );
}

const sendMessage = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: name || "",
      email: email || "",
      message: message || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Enter name."),
    email: Yup.string()
      .email("Invalid email.")
      .required("Enter email."),
    message: Yup.string().required("Enter message.")
  }),

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(ContactForm);

export default sendMessage;

const ContactFormWrapper = styled.div`
  width: 50%;
  padding: 2rem;
`;
