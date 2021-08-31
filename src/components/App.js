import './App.css';
import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";


function App() {
    return (
        <div>
            <Intro/>
            <About/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;
