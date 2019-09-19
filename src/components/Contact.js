import React from "react";
import styled from "styled-components";

import ContactText from "./ContactText";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="internal-section-wrapper">
        <div className="floating-box">
          <ContactText />
          <ContactForm />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;

const ContactWrapper = styled.section`
  .internal-section-wrapper {
    height: 100vh;
  }
  .floating-box {
    height: 50vh;
    margin: 3rem 0;
    display: flex;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    /* background-color: rgba(34, 63, 82, 0.8); */
  }
`;
