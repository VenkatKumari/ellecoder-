import React from "react";
import { ContactStyle } from "../Styles/ContactStyling";

const ContactForm = () => {
  return (
    <ContactStyle>
      <form
        id="#contact-form"
        className="contactForm"
        action="https://formspree.io/xzbjnllb"
        method="POST"
      >
        <div className="contact-input">
          <label htmlFor="name">N a m e</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="contact-input">
          <label htmlFor="email">E m a i l A d d r e s s</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="contact-input">
          <label htmlFor="message">M e s s a g e</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" value="Send">
          G e t I n T o u c h.
        </button>
      </form>
    </ContactStyle>
  );
};

export default ContactForm;

//Name, email, message ==> text field, email field, message
