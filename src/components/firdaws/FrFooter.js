import React from 'react';
import Logo from '../../img/firdaws-2.png'

const FrFooter = () => {
    return (
        <footer className="frFooter">
            <div className="row">
                <div className="col-1-of-4 u-center-text">
                <img className="frLogo" src={Logo} alt="firdaws"/>
                </div>
                <div className="col-1-of-4">
                    <ul className="frFooter__list">
                        <li className="frFooter__list--li"><a href="./home">Home</a></li>
                        <li className="frFooter__list--li"><a href="portfolio">Portfolio</a></li>
                        <li className="frFooter__list--li"><a href="projects">Projects</a></li>
                        <li className="frFooter__list--li"><a href="miniprojects">Mini-Projects</a></li>
                    </ul>
                </div>
                <div className="col-1-of-4">
                    <ul className="frFooter__list">
                        <li className="frFooter__list--li"><a href="academy">Academy</a></li>
                        <li className="frFooter__list--li"><a href="firdaws-dev">Agency</a></li>
                        <li className="frFooter__list--li"><a href="mailto:jalaleddine.elhabbazi@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                        {/* <li className="frFooter__list--li"><a href="">Projects</a></li> */}
                        {/* <li className="frFooter__list--li"><a href="">Mini-Projects</a></li> */}
                    </ul>
                </div>
                <div className="col-1-of-4 u-center-text">
                    <h3>Follow Us:</h3>
                    <div className="btn-wrapper profile">
                        <a href="https://twitter.com/HabbaziJalal" target="_blank" rel="noopener noreferrer" >
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/jalaleddine/" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://codepen.io/jalal-eddine" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-codepen"></ion-icon>
                        </a>
                        <a href="https://github.com/Jalal-Eddine" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
);
}

export default FrFooter;