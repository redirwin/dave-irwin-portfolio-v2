import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="internal-section-wrapper">
        <h3>Contact</h3>
      </div>
    </ContactWrapper>
  );
}

export default Contact;

const ContactWrapper = styled.section``;
