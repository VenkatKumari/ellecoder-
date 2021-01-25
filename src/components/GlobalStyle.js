import { createGlobalStyle } from "styled-components";
//image
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
}
body {
    font-family: 'Montserrat', sans-serif;
    background: #0F52BA;

}

button {
      width: 40%;
      align-self: center;
      margin-top: 3rem;
      text-decoration: none;
      border: none;
      padding: 2rem 0rem;
      cursor: pointer;
      background:black;
      color: white;
      transition: 0.5s ease-out;
      font-size: 2rem;

      &:hover {
        background: #4682B4;
        color: black;
      }
    }

@media screen and (max-width: 3000px){
  html {
    font-size: 53%;
  }
}
@media screen and (max-width: 1334px) {
  html {
    font-size: 53%;
  }
  svg {
     width: 100%;
  } 
}

@media screen and (max-width: 754px) {
  html {
    font-size: 45%;
  }
  
  .logo{
    flex: 1 1 30rem;
  }

  ul{
  padding-top: 2rem;
  }
  

  .intro-social {
    @include flex(center, center, row);

    a {
      margin: 2rem;
    }
  }
}


`
