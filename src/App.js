import React from "react";
import './App.css';


import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Form from "./Form/Form";



const App=()=>{
  return (
  <>
  
 
  <Navbar />
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <Hero/>
  <Form/>
  </div>
  
    </> 
    )
};

export default App;
