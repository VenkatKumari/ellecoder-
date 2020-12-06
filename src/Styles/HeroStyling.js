import styled from "styled-components";

export const HeroStyling = styled.div`
  min-height: 75vh;
  overflow: hidden;

  .intro {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .intro-text {
      flex-wrap: wrap;
    }

    h2 {
      background: linear-gradient(to right, #cc0e74, #f9a1b6);
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      font-size: 8rem;
      padding-top: 2rem;
      display: inline-block;
    }

    h3 {
      font-size: 6rem;
      padding: 2rem 0rem;
    }

    p {
      padding-top: 4rem;
      font-size: 3rem;
      color: #2c2c2c;
    }
  }

  .splash {
    position: absolute;
    top: 0%;
    right: 0%;
    height: 100%;
    z-index: -1;
  }

  .intro-social {
    margin-top: 4rem;

    a {
      padding-right: 5rem;
      text-decoration: none;
    }
  }

  .active {
    background: $gray-text;
    color: white;
    padding: 1rem 3rem;
    border-radius: 2rem;
  }

  .intro-text,
  .intro-images {
    flex: 1 1 40rem;
  }

  #leafleft {
    animation: leaf 1.5s ease infinite alternate 0.5s;
  }

  #me {
    animation: me 1s ease infinite alternate;
    transform-origin: bottom;
  }

  #arrow {
    animation: clock 60s infinite linear;
    transform-box: fill-box;
    transform-origin: bottom;
  }

  #coffeesteam {
    animation: steam 2s linear infinite;
  }

  #codeline1 {
    animation: coding 4s alternate-reverse infinite;
  }

  /* #codeline2 {
    animation: coding 1s linear infinite 0.5s;
  } 
   #codeline3 {
    animation: coding 2s reverse infinite;
  }
  */

  @keyframes leaf {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(-30%);
    }
  }

  @keyframes me {
    from {
      transform: rotate(-5deg);
    }
    to {
      transform: rotate(5deg);
    }
  }

  @keyframes clock {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  @keyframes steam {
    from {
      transform: translateY(0%) rotateZ(0deg);
      opacity: 1;
    }
    to {
      transform: translateY(-10%) rotateZ(-2deg);
      opacity: 0;
    }
  }

  @keyframes coding {
    from {
      transform: translateX(0%);
      opacity: 1;
    }
    to {
      transform: translate(-10%);
      opacity: 0;
    }
  }
`;
