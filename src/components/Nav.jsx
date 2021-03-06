import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { logoAnimation } from "../Styles/Animation";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <NavStyle>
      <motion.div
        className="logo"
        variants={logoAnimation}
        initial="hidden"
        animate="show"
      >
        <Link to="/">
          <h1 id="#logo"> ElleCoder </h1>
        </Link>
      </motion.div>

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.div`
background: black;
  min-height: 10vh;
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  
  .logo {
    flex: 1 1 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 20rem;

    a:hover, a:visited, a:link, a:active
{
    text-decoration: none;
}
 

    h1 {
      font-family: "Sacramento", cursive;
      text-decoration: none;
      color:white;
      font-size: 2.7rem;
      
    }
     
  }
  ul {
    flex: 2 1 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 60rem;
    li {
      list-style: none;
      padding-left: 10rem;
      position: relative;

      a {
        text-decoration: none;
        color:white;
        font-size: 3rem;
        
      }

      
    }&²
  }
  @media screen and (max-width: 500px){
    min-height: 13vh;
    html{
      font-size: 30%;
    }
    svg{
      display: none;
    } 
    .logo{
      h1{
        font-size: 3rem;
      }
    }
    ul{
      li{
        a{
          font-size: 2.3rem;
        }
        
        padding: 0rem 2rem 0rem 2rem;
    }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: white;
  width: 0%;
  position: absolute;
  bottom: -50%;
  left: 52%;
  @media screen and (max-width: 500px){
  bottom: -30%;
  left: 24%;
  }
`;

export default Nav;
