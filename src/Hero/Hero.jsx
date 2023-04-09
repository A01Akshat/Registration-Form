import React from "react";
import './Hero.css';
import img1 from '../images/image 5.png';
import img3 from '../images/Ellipse 14.png';
import img4 from '../images/google-docs 1.svg';

const Hero = () => {

    return (

        <div className="registrationHero">
            <img src={img1} className="img" />
            <h1 className="imgTxt">Microsoft Learn <span style={{ color: "#3B61CF" }}>Student</span>{'\n'}Ambassader <br /><span style={{ fontWeight: "375" }}>Kiit Chapter</span></h1>
        </div>

    )
}


export default Hero;