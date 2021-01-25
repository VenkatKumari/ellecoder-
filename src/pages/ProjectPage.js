import React from "react";
import NewProject from '../components/NewProject';
import { Helmet } from "react-helmet";

const ProjectPage = () => {
  return (
    <div>
      <Helmet>
        <title>ElleCoder | Projects</title>
      </Helmet>
      <NewProject />
    </div>
  );
};

export default ProjectPage;
