import React from "react";
import img6 from '../images/Vector 3.svg'
import './Form.css';

const Form = () => {

    return (
        <>
            <div className="cont">

                <h1 className="form">Personal Information</h1>
                <div className="vector"><img src={img6} /></div>

                <h1 className="name">Name</h1>
                <input type="text" placeholder="Please Enter your name" className="inp1"></input>

                <h1 className="roll">Roll Number</h1>
                <input type="text" placeholder="Please Enter your Roll" className="inp1"></input>

                <h1 className="yr">Current Year</h1>
                <input type="text" placeholder="Select your year" className="inp1"></input>

                <h1 className="br">Branch</h1>
                <input type="text" placeholder="Enter your Branch" className="inp1"></input>

                <h1 className="kiitem">Kiit Email ID</h1>
                <input type="email" placeholder="Please Enter your Email ID " className="inp1"></input>

                <h1 className="perem">Personal Email ID</h1>
                <input type="email" placeholder="Please Enter your Email ID" className="inp1"></input>

                <h1 className="phn">Phone Number</h1>
                <input type="text" placeholder="Please Enter your Phone Number" className="inp1"></input>

                <h1 className="form2">Social Information</h1>
                <div className="vector"><img src={img6} /></div>

                <h1 className="ln">LinkedIn</h1>
                <input type="link" placeholder="Drop your Profile Link" className="inp1"></input>

                <h1 className="git">Github</h1>
                <input type="text" placeholder="Drop your Profile Link" className="inp1"></input>

                <h1 className="form3">Survey Information</h1>
                <div className="vector"><img src={img6} /></div>

                <h1 className="name">What Do You Expect From Event?</h1>
                <textarea type="text" placeholder="Write in Brief..." className="txtarea"></textarea>

                <div><button className="btn">Submit</button></div>
            </div>
        </>
    )

}

export default Form;




