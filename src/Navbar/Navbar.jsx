import React from "react";
import img2 from "../images/badge.png";
import "./Nav.css";

export default function Navbar() {
    return (
        <div className="registrationNavbar">
            <div className="logo"><img src={img2} />
                <h1 className="header">MLSA</h1>
            </div>
        </div>
    )
}