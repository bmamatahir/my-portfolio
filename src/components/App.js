import './App.css';
import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";


function App() {
    return (
        <div>
            <Intro/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
