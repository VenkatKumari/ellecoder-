import { createGlobalStyle } from "styled-components";
//image
import flowersblackbg from "../img/flowersblackbg.jpg";
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
}

@media screen and (max-width: 3000px){
  html {
    font-size: 53%;
  }

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

  svg {
    margin-top: 3rem;
    height: 100%;
  }
  
  .logo{
    flex: 1 1 30rem;
  }

  ul{
  padding-top: 2rem;
  }
 
 form{
   
 }
  

  .intro-text {
    margin-top: 5rem;
    text-align: center;
    
  }

  .intro-images {
    text-align: center;
  }

  .intro-social {
    @include flex(center, center, row);

    a {
      margin: 2rem;
    }
  }
}

`;
