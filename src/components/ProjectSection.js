import React from "react";
import tripmainpage from "../img/tripmainpage.png";
import capture from "../img/capture.png";
import musicplayer from "../img/musicplayer.png";
import epita from "../img/epita.png";
import epita1 from "../img/epita1.png";
import days from "../img/days.png";
import photon from "../img/photon.jpg";
import summerwood from "../img/summerwood.jpg";
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
            <img src={epita1} alt="" />
            <img src={epita} alt="" />
          </div>
        </Toggle>

        <Toggle title="Javascript" picture={javascript}>
          <div className="title">
            <h1>JavaScript Projects</h1>
          </div>
          <div className="projects">
            <img src={days} alt="" />
            <img src={photon} alt="" />
          </div>
        </Toggle>

        <Toggle title="React JS" picture={reactjs}>
          <div className="title">
            <h1>React Projects</h1>
          </div>
          <div className="projects">
            <img src={summerwood} alt="" />
            <img src={capture} alt="" />
            <img src={musicplayer} alt="" />
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </div>
  );
};

export default ProjectSection;
