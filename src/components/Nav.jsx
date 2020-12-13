import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo250px from "../img/logo250px.png";
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
          <img id="#logo" src={logo250px} alt="logo" />
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
  min-height: 10vh;
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background: white;
  .logo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 20rem;

    h1 {
      font-family: "Sacramento", cursive;
      padding-left: 2rem;
      font-size: 2.5rem;
    }
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  ul {
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
        color: #252525;
        font-size: 3rem;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #f9a1b6;
  width: 0%;
  position: absolute;
  bottom: -50%;
  left: 52%;
`;

export default Nav;
