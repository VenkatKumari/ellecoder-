import styled from "styled-components";

export const HeroStyling = styled.div`
  min-height: 80vh;
  display: flex;

  .intro {
    width: 90%;
    padding: 10rem 7rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .intro-text {
      flex-wrap: wrap;
    }

    h2 {
     color: #f3f4f5;
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
      color: #a0a0a0;
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

  /* #leaf {
    animation: leaf 3s ease-out infinite alternate 0.5s;
  } */
/* 
  #me {
    animation: me 1s ease infinite alternate;
    transform-origin: bottom;
  } */

  #arrow {
    animation: clock 60s infinite linear;
    transform-box: fill-box;
    transform-origin: bottom;
  }

  #coffeesteam {
    animation: steam 3s linear infinite;
  }

  #line1 {
    animation: coding 3s alternate-reverse infinite ;
  }

#line2{
  animation: coding 3s normal infinite;
}

/* #line3{
 animation: codinglines 2s alternate infinite;
} 
#line4{
  animation: codinglines 3s normal infinite;
} */
  /* #codeline2 {
    animation: coding 1s linear infinite 0.5s;
  } 
   #codeline3 {
    animation: coding 2s reverse infinite;
  }
  */

  /* @keyframes leaf {
    from {
      transform: translateY(0%) rotateX(0deg);
     
    }

    to {
      transform: translateY(22%) rotateX(60deg);
      
    }
  } */

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
      transform: translate(-10%);
      opacity: 0;
    }
    to {
      transform: translate(0%);
      opacity: 1;
    }
  }
  @keyframes codinglines {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(10%);
      opacity: 0;
    }
  }
  @media screen and (max-width: 1334px){
   .intro{
     padding: 1rem 1rem;
     min-height: 80vh;
    svg{
     
     width: 90%;
   }
   }
   
     }
     @media screen and (max-width: 754px){

svg {
  margin: 2rem 0rem;
  width: 100%;
  
}
.intro{

}
.intro-text {
  margin-top: 5rem;
  text-align: center;
  
}

.intro-images {
  text-align: center;
}
}
 
  @media screen and (max-width: 500px){
    min-height: 60vh;

    .intro{
      width: 100%;
      margin: 0rem 0rem;
      padding: 0rem 0rem;
    }
    svg{
      display: none;
    }
 
}


`;

