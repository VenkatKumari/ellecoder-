import styled from "styled-components";
//image
import contact from '../img/contact.svg';

export const ContactStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), transparent),
      url(${contact});
    
  form {
    display: flex;
    flex-direction: column;
    padding: 5rem 50rem;
   
    .contact-input {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0rem;
      color: white;
      label {
        margin: 1rem 0rem;
        font-size: 2rem;
        text-shadow: 1px 1px 6px #4e3b3b;
      }
      input, textarea {
        border: none;
        text-decoration: none;
        padding: 1rem 10rem;
        background: #080000;
        color: white
      }
      textarea:focus,input:focus{
        border: none;
        border: 1px solid grey;
        box-shadow: 1px 1px 6px #afacac;
      }

    }

    button {
      width: 100%;
      align-self: center;
      margin-top: 3rem;
      text-decoration: none;
      border: none;
      padding: 1rem 3rem;
      cursor: pointer;
      background: black;
      color: white;
      transition: 1s ease-out;

      &:hover {
        background: white;
        color: black ;
      }
    }
  }
  @media screen and (max-width: 500px){
    overflow-x: hidden;
    display: block;
    min-height: 85vh;
    padding: 3rem 0rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), transparent),
      url(${contact});
    
    form{
      width: 90%;
      margin: auto;
      background: none;
      padding: 0rem 0rem;
      .contact-input{
        label{
          color: black;
          text-shadow: 1px 1px 6px white;
        }
      textarea, input{
        text-decoration: none;
        border: none; 
        outline: black;
        background:white;
        color: black
      }
      input:focus{
        border: none;
        border: 1px solid grey;
        box-shadow: 1px 1px 6px #afacac;
      }
      }
      button{
     width: 90%;

    }
    }
    
  }
`;
