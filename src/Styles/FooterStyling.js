import React from "react";
import styled from "styled-components";
//Images
import wave from "../img/wave.svg";

const FooterStyling = styled.div`
  background: url(${wave});
  background-repeat: repeat;
  background-position: 50%;

  background-size: contain;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7rem;
  .footer-text {
    padding-left: 5rem;
    color: white;
  }
  .footer-social {
    flex: 2 1 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default FooterStyling;
