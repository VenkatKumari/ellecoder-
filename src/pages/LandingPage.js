import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>ElleCoder | Front End Web Developer</title>
      </Helmet>
      <Hero />
      <Footer/>
    </div>
  );
};

export default LandingPage;
