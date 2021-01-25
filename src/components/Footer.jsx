//Images
import linkedin from '../img/linked-in.svg';
import github from "../img/github.svg";
import twitter from "../img/twitter 1.svg";
import FooterStyling from "../Styles/FooterStyling";
//styles

const Footer = () => {
  return (
    <FooterStyling>
      <div className="footer-text">
        <h1>Find me on LinkedIn & Github!</h1>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/venkatkumari/" target="_blank">
          <img src={linkedin} alt="linkedin-link" />
        </a>
        <a href="https://github.com/VenkatKumari" target="_blank">
          <img src={github} alt="github-link" />
        </a>
    
      </div>
    </FooterStyling>
  );
};

export default Footer;
