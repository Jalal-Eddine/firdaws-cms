import React from 'react';
// import Logo from '../../Assets/img/firdaws/firdaws.png'
// import { ReactComponent as Hero } from '../../Assets/img/firdaws/cloud-computing.svg


const FrHeader = () => {
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
                <span className="frMiniTitle"><strong>WELCOME</strong><br/> TO <em>FIRDAWS</em></span>
                <h1 className="frTitle u-center-text">A web agency of all your projects! <br/></h1>
                <h4 className="u-center-text">Do you have an idea? <em>Firdaws</em> will help you to turn it into reality!</h4>
                <button className="btn btn--firdaws">Start here</button>
            </div>
        </header>
);
}

export default FrHeader;