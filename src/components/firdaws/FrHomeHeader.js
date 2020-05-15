import React from 'react';

import webagency from '../../img/firdawsweb.jpg'
import academy from '../../img/firdaws-academy.jpg'

const FrHomeHeader = () => {
    return (
        <header className="frHeader">
            <div className="squares firdaws-color square1"></div>
            <div className="squares firdaws-color square2"></div>
            <div className="squares firdaws-color square3"></div>
            <div className="squares firdaws-color square4"></div>
            <div className="squares firdaws-color square5"></div>
            <div className="squares firdaws-color square6"></div>
            <div className="squares firdaws-color square7"></div>
            <div className="row container">
                <span className="frMiniTitle u-margin-bottom-medium"><strong>WELCOME</strong><br/> TO <em>FIRDAWS</em></span>
                {/* <h1 className="frTitle u-center-text">Learn for free & We build your project <br/></h1> */}
                <div className="academy__container row">
                    <div className="academy__container__categories">
                        <a href="./academy"><img src={academy} alt="web development"/></a>
                        <a href="./firdaws-dev"><img src={webagency} alt="web development"/></a>
                    </div>
                </div>
                <h4 className="u-center-text">Learn with us! or contact us for project inquiry</h4>
                <a className="btn btn--firdaws" href="mailto:jalaleddine.elhabbazi@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
        </header>
);
}

export default FrHomeHeader;