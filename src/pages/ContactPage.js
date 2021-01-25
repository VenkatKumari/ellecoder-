import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <Helmet>
        <title>ElleCoder | Contact Us</title>
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
