import React from "react";
import styled from "styled-components";

function ContactForm() {
  return (
    <ContactFormWrapper>
      <form method="POST" action="https://formspree.io/redirwin@gmail.com">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </ContactFormWrapper>
  );
}

export default ContactForm;

const ContactFormWrapper = styled.div`
  width: 50%;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 75%;
    * {
      border: none;
      padding: 0.5rem;
      font-size: 1rem;
    }
    input,
    textarea {
      margin-bottom: 0.5rem;
    }
    textarea {
      height: 15vh;
    }
    button {
      width: 10vh;
    }
  }
`;
