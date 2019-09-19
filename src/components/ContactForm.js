import React from "react";
import styled from "styled-components";

function ContactForm() {
  return (
    <ContactFormWrapper>
      <form method="POST" action="https://formspree.io/redirwin@gmail.com">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <button type="submit">Send Test</button>
      </form>
    </ContactFormWrapper>
  );
}

export default ContactForm;

const ContactFormWrapper = styled.div`
  width: 50%;
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
  }
`;
