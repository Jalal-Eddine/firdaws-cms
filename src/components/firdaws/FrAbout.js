import React from 'react';
import ProfilePicture from './../../../Assets/img/me-1-1.jpg'
import FrMiniTitle from '../../../components/FrMiniTitle';
const FrAbout = () => {
    return (
        <section className="frabout" id="About">
                <div className="about_text u-margin-bottom-big">
                    <FrMiniTitle 
                    strong=""
                    content="About"
                    />
                    {/* <h3 className="heading-tertiary u-margin-bottom-small">QUI SOMMES-NOUS ?</h3> */}
                    <p className="paragraph">
                    Firdaws utilizes web development technologies that are both proven and practical. With the options available in the market today, we can help you determine what is best for your needs. Our mission at Firdaws is to make the web development process easier for you: we help our clients choose the right tools for hosting, ecommerce, content management and marketing.
                    </p>

                    <h3 className="heading-tertiary ">FROM THE FOUNDER</h3>
                    <p className="paragraph">
                        Hi there, I am Jalal-Eddine, a full-stack web developer and an entrepreneur.<br/>
                        🌟 WHY CHOOSE ME OVER OTHER DEVELOPERS? 🌟<br/>
                        ✅ Over-Delivering: This is core to my work as a developer. My focus is on GIVING more than what I expect to RECEIVE. I will make sure that my clients are completely satisfied with my work.<br/>
                        ✅ Honesty & High moral values: I like to be completely honest and transparent with my clients. I work on every project as if it's my own personal project. For me, your success is my success.<br/>
                        ✅ Responsiveness & Consulting: Being extremely responsive and keeping all lines of communication readily open with my Clients. I can help with choosing the right technologies for your projects, on the extent of my knowledge. <br/>
                        ✅ Kindness: One of the biggest aspects of my life that I implement in every facet of my life. Treating everyone with respect, understanding all situations, and genuinely wanting to IMPROVE my Client's situations.<br/>

                        🙋🏼‍♂️I am eager to work with you, to provide reliable, consistent, and High-Level solutions to development challenges. Please contact me, so we can discuss how we can work together to FULLY meet your Business Needs!

                    </p>
                    <a href="portfolio" className="btn-text">View Portfolio &rarr;</a>
                </div>
                <div className="profile">
                    <img 
                        alt=" 11"
                        className="image"
                        src={ProfilePicture}
                    />
                    <div className="social-links">
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
    </section>
);
}

export default FrAbout;