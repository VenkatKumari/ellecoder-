import React from "react";
import styled from "styled-components";

export const ProjectStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  .projects {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    img {
      margin: 4rem 6rem;
      flex: 1 1 50rem;
      width: 30%;
      height: 30%;
    }
  }
`;
