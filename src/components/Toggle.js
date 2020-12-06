import React, { useState } from "react";
import { motion } from "framer-motion";
import { screen } from "@testing-library/react";
import styled from "styled-components";

const Toggle = ({ children, title, picture }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleStyle layout className="projects" onClick={() => setToggle(!toggle)}>
      <motion.div className="header" layout>
        <motion.h4 className="text">{title}</motion.h4>
        <motion.img className="image" src={picture}></motion.img>
      </motion.div>

      {toggle ? children : ""}
    </ToggleStyle>
  );
};

const ToggleStyle = styled(motion.div)`
  
 

  .header {
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;


.text{
    flex: 1  1 200rem;
    
}

   
`;

export default Toggle;
