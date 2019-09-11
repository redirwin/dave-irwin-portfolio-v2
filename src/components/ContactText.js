import React from "react";
import styled from "styled-components";

import SocialIcons from "./SocialIcons";

function ContactText() {
  return (
    <ContactTextWrapper>
      <h3>Let's Talk</h3>
      <p>
        Ready to have a real wizard conjuring projects in your royal court?
        Reach out and let's have a conversation.
      </p>
      <div className="phone method">
        <p>
          <a
            href="tel:+1-303-499-7111"
            target="_blank"
            rel="noopener noreferrer"
          >
            928.240.0781
          </a>
        </p>
      </div>
      <div className="email method">
        <p>
          <a
            href="mailto:dave@daveirwin.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            dave@daveirwin.dev
          </a>
        </p>
      </div>
      <div className="location method">
        <p>
          <a
            href="https://goo.gl/maps/dwS722amsRQg92cK9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mesa, Arizona
          </a>
        </p>
      </div>
      <SocialIcons />
    </ContactTextWrapper>
  );
}

export default ContactText;

const ContactTextWrapper = styled.div`
  width: 50%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .method p {
    margin: 0;
    a {
      border: none;
    }
  }
  .social-icons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    width: 10rem;
    a {
      color: white;
      font-size: 1rem;
      &:hover {
        color: #67a6b5;
      }
    }
  }
`;
