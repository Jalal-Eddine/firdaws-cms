import React from 'react';
import Logo from '../../img/firdaws-2.png'
import Fr from '../../img/french.png'
import Eng from '../../img/english.png'
import Night from '../../img/night.png'
// import Title1 from '../components/Title1'

const FrNavBar = ({Switch}) => {
      return(
       <>  
        <a href="./"> 
            <img className="frLogoHeader" src={Logo} alt="firdaws"/>
        </a>
    
        <div className="frlanguages">
            <a href="./fr"> 
                <img className="french" src={Fr} alt="Français"/>
            </a>
            <a href="./"> 
                <img className="english" src={Eng} alt="English"/>
            </a>
            <img className="switch" src={Night} alt="English"/>
            <input type="checkbox"onClick={Switch}> 
            </input>
        </div>
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" class="navigation__button" >
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="./academy" class="navigation__link"><span>01</span>Academy</a></li>
                    <li class="navigation__item"><a href="./firdaws-dev" class="navigation__link"><span>02</span>Agency</a></li>
                    <li class="navigation__item"><a href="./projects" class="navigation__link"><span>03</span>Projects</a></li>
                    <li class="navigation__item"><a href="./portfolio" class="navigation__link"><span>04</span>Portfolio</a></li>
                    <li class="navigation__item"><a href="mailto:jalaleddine.elhabbazi@gmail.com" target="_blank" rel="noopener noreferrer" class="navigation__link"><span>05</span>Contact</a></li>
                    </ul>
            </nav>
        </div>
        </>
        );
      }
      
      export default FrNavBar;