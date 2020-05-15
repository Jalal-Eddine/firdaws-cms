import React from 'react';
// import Title2 from '../../components/Title2'
import { Component } from 'react';
import FrMiniTitle from '../../../components/FrMiniTitle';
import FrTitle from '../../../components/FrTitle';
// import BackImage from '../../../Assets/img/firdaws/path1.png'

class FrProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          PopupOpen: ""
        };
      }
    closePopup = (event)=>{
    const PopupClass = event.target.classList[0];
    const closeButtom = document.getElementsByClassName("popup");
    // const Span = event
    if(PopupClass === 'popup' ){
        event.target.style.display="none";
    } else if(PopupClass === 'popup__close'){
        for(let i=0; i< closeButtom.length; i++){
       closeButtom[i].style.display='none';
    }
        }
    }
    
    openPopup1 = (event) =>{
        const Popup1 = document.getElementById("popup_1");
        Popup1.style.display="block";
    }
    openPopup2 = (event) =>{
        const Popup2 = document.getElementById("popup_2");
        Popup2.style.display="block";
    }
    openPopup3 = (event) =>{
        const Popup3 = document.getElementById("popup_3");
        Popup3.style.display="block";
    }


    render() {
        return(
        <div className="frProjects">
            {/* <img src={BackImage} alt="BackImage"/> */}
            {/* <div className="squares square-1"></div> */}
            {/* <div className="squares square-2"></div> */}
            {/* <div className="squares square-3"></div> */}
            {/* <div className="squares square-4"></div> */}
            <section className="section-project" id="section-project">
                <FrMiniTitle 
                strong=""
                content="Projects"
                />
                <FrTitle 
                content1="We are what we do."
                />
                {/* card 1 grid of 3*/}
                <div className="row">
                <div className="col-1-of-3">
                        <div className="frProjectCard">
                            <div className="frProjectCard__side frProjectCard__side--front">
                                <div className="frProjectCard__picture frProjectCard__picture--10">
                                    &nbsp;
                                </div>
                                <h4 className="frProjectCard__heading">
                                    <span className="frProjectCard__heading-span frProjectCard__heading-span--10">Zoumii: Online Store</span>
                                </h4>
                                <div className="frProjectCard__details">
                                    <ul>
                                        <li>WordPress</li>
                                        <li>CSS/SASS</li>
                                        <li>PHP</li>
                                        <li>OceanWp theme (modified)</li>
                                        <li>Apache server</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="frProjectCard__side frProjectCard__side--back frProjectCard__side--back-10">
                                <div className="frProjectCard__cta">
                                <a href="https://zoumii.com/" target="_blank" rel="noopener noreferrer" className="btn btn--green">SEE IT LIVE</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="frProjectCard">
                            <div className="frProjectCard__side frProjectCard__side--front">
                                <div className="frProjectCard__picture frProjectCard__picture--11">
                                    &nbsp;
                                </div>
                                <h4 className="frProjectCard__heading">
                                    <span className="frProjectCard__heading-span frProjectCard__heading-span--11">Online Store</span>
                                </h4>
                                <div className="frProjectCard__details">
                                    <ul>
                                        <li>WordPress</li>  
                                        <li>CSS/SASS</li>
                                        <li>PHP</li>
                                        <li>Build over NewStore theme (custom theme)</li>
                                        <li>Apache server</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="frProjectCard__side frProjectCard__side--back frProjectCard__side--back-11">
                                <div className="frProjectCard__cta">
                                <a href="https://store.zoumii.com/" target="_blank" rel="noopener noreferrer" className="btn btn--green">SEE IT LIVE</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="frProjectCard">
                            <div className="frProjectCard__side frProjectCard__side--front">
                                <div className="frProjectCard__picture frProjectCard__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="frProjectCard__heading">
                                    <span className="frProjectCard__heading-span frProjectCard__heading-span--1">Face Detection</span>
                                </h4>
                                <div className="frProjectCard__details">
                                    <ul>
                                        <li>React</li>
                                        <li>REST API/JSON/AJAX/HTTP</li>
                                        <li>Node.js/Express.js</li>
                                        <li>PostgreSQL</li>
                                        <li>Heroku</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="frProjectCard__side frProjectCard__side--back frProjectCard__side--back-1">
                                <div className="frProjectCard__cta">
                                <a href="https://smartbrain0.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn--green">SEE IT LIVE</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="u-center-text"><a href="/projects" className="btn btn--firdaws" style={{"font-family": 'Lato,sans-serif'}}>Show more</a></div>
            </section>
        </div>
        );
}
}

export default FrProjects;