import React from 'react';
// import BackImage from '../../../Assets/img/firdaws/waves.png'
import { FaReact,FaNodeJs,FaSass,FaBootstrap,FaHtml5,FaCss3Alt,FaPhp,FaWordpress} from "react-icons/fa";
import { DiJsBadge,DiJqueryLogo,DiMysql,DiPostgresql,DiMongodb } from "react-icons/di";
import FrMiniTitle from '../../../components/FrMiniTitle';
import FrTitle from '../../../components/FrTitle';

const FrTech = () => {
    return (
        <section className="tech">
            {/* <img src={BackImage} alt="BackImage"/> */}
            <FrMiniTitle 
            strong=""
            content="Technologies"
            />
            <FrTitle 
            content1="We use the latest"
            content2="technologies"
            />
            <div className="tech__container">
                <div className="tech__icons" style={{"color":"#e34f26"}}><FaHtml5/></div>
                <div className="tech__icons" style={{"color":"#0099e5"}}><FaCss3Alt/></div>
                <div className="tech__icons" style={{"color":"rgb(205,103,153)"}}><FaSass/></div>
                <div className="tech__icons" style={{"color":"rgb(86,61,124)"}}><FaBootstrap/></div>
                <div className="tech__icons" style={{"color":"#f7df1e"}}><DiJsBadge/></div>
                <div className="tech__icons" style={{"color":"#0769ad"}}><DiJqueryLogo/></div>
                <div className="tech__icons" style={{"color":"#00d8ff"}}><FaReact/></div>
                <div className="tech__icons" style={{"color":"#6cc24a"}}><FaNodeJs/></div>
                <div className="tech__icons" style={{"color":"#4f5b93"}}><FaPhp/></div>
                <div className="tech__icons" style={{"color":"#00758f"}}><DiMysql/></div>
                <div className="tech__icons" style={{"color":"rgb(49,97,146)"}}><DiPostgresql/></div>
                <div className="tech__icons" style={{"color":"#589636"}}><DiMongodb/></div>
                <div className="tech__icons" style={{"color":""}}><FaWordpress/></div>
                {/* <div className="tech__icons" style={{"color":"#0ea0db"}}><DiPhotoshop/></div> */}
            </div>
        </section>
);
}

export default FrTech;