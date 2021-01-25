import  styled  from 'styled-components';
//Images
import tripmainpage from "../img/tripmainpage.png";
import capture from "../img/capture.png";
import musicplayer from "../img/musicplayer.png";
import epita from "../img/epita.png";
import epita1 from "../img/epita1.png";
import days from "../img/days.png";
import photon from "../img/photon.jpg";
import summerwood from "../img/summerwood.jpg";
import photographyfirst from "../img/photographyfirst.png";


const NewProject = () => {
    return ( <StyledProject className='project-area'>
        <div className="project html">
            <div className="project-text">HTML & CSS3 Projects</div>
            <div className="cards">
            <div className="card proj2"><a href=""><img src={tripmainpage} alt=""/></a></div>
            <div className="card proj2"><a href=""><img src={photographyfirst} alt=""/></a></div>
            <div className="card proj3"><a href=""><img src={epita1} alt=""/></a>
            
            </div>
            <div className="card proj4"><a href=""><img src={epita} alt=""/></a></div> </div>
                  
            </div>
        <div className="project js">
        <div className="project-text">JavaScript Projects</div>
        <div className="cards"><div className="card"> <a href="https://github.com/VenkatKumari/website_with_js" target='_blank'><img src={days} alt=""/></a></div>
        <div className="card"><a href="https://github.com/VenkatKumari/Photon-JS" target='_blank'><img src={photon} alt=""/></a></div></div>
        
        </div>
        <div className="project react">
        <div className="project-text">React Projects</div>
        <div className="cards"> <div className="card"><a href="https://venkatkumari.github.io/summerwood/" target='blank'><img src={summerwood} alt=""/></a></div>
        <div className="card">
            <a href="https://venkatkumari.github.io/capture/" target='blank'><img src={capture} alt=""/></a></div>
        <div className="card"><a href="https://github.com/VenkatKumari/Waves-Music-App/tree/main/react-player" target='_blank'><img src={musicplayer} alt=""/></a></div></div>
       
        </div>
        <div className='detail-box'>To Visit the Demo of this project, <span> <a>Click Here!</a> </span></div>

    </StyledProject> );
}
 
export default NewProject;

const StyledProject = styled.div`
min-height: 85vh;
background: linear-gradient(rgba(1, 1,1, 0.3), transparent);

.project{

.project-text{ 
    font-weight: bold;
    font-size: 3rem;
    color: white;
    padding: 3rem 30rem;
    text-align: center
}
.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
   .card{
     margin: 1rem 2rem;
    background: grey;
    width: 500px;
    height: 300px;
    a img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
   }

}}
@media screen and (max-width: 1330px){
    background: white;

    .project{
        .project-text{
            color: #2c2b2b;
        }
    }
}
`;