import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
//image
import flowersblackbg from "../img/flowersblackbg.jpg";

export const ContactStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;

  form {
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.8), transparent),
      url(${flowersblackbg});
    background-size: cover;
    padding: 5rem 30rem;
    .contact-input {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0rem;
      color: white;
      label {
        margin: 1rem 0rem;
        font-size: 2rem;
      }
      input {
        border: none;
        text-decoration: none;
        padding: 1rem 0rem;
      }
    }

    button {
      width: 150%;
      align-self: center;
      margin-top: 3rem;
      text-decoration: none;
      border: none;
      padding: 2rem 0rem;
      cursor: pointer;
      background: #ad0b49;
      color: white;
      transition: 1s ease-out;

      &:hover {
        background: #ce56aa;
        color: black;
      }
    }
  }
`;
