import React from "react";
import tripmainpage from "../img/tripmainpage.png";
import photographyfirst from "../img/photographyfirst.png";
import { AnimateSharedLayout } from "framer-motion";
//Images
import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import javascript from "../img/javascript.png";
import reactjs from "../img/reactjs.png";
import Toggle from "./Toggle";
const ProjectSection = () => {
  return (
    <div>
      <AnimateSharedLayout>
        <Toggle title="Html5 & Css3" picture={html5}>
          <div className="title">
            <h1>HTML5 and CSS3 Projects</h1>
          </div>
          <div className="projects">
            <img src={tripmainpage} alt="" />
            <img src={photographyfirst} alt="" />
          </div>
        </Toggle>

        <Toggle title="Javascript" picture={javascript}>
          <div className="title">
            <h1>JavaScript Projects</h1>
          </div>
          <div className="projects">
            <img src={tripmainpage} alt="" />
            <img src={photographyfirst} alt="" />
          </div>
        </Toggle>

        <Toggle title="React JS" picture={reactjs}>
          <div className="title">
            <h1>React Projects</h1>
          </div>
          <div className="projects">
            <img src={tripmainpage} alt="" />
            <img src={photographyfirst} alt="" />
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </div>
  );
};

export default ProjectSection;
