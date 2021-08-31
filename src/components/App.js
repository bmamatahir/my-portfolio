import './App.css';
import React from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";


function App() {
    return (
        <div>
            <Intro/>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;
