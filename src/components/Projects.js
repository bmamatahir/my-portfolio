import React from 'react';
import ProjectCard from "./ProjectCard";
import {projects} from "../data/constants";
import Tilt from "react-tilt/dist/tilt";
import Slider from "react-slick";
import './Projects.css'

const Projects = (props) => {
    var settings = {
        dots: true,
        speed: 200,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        pauseOnHover: true,
        touchThreshold: 100,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className="Projects bg-gray-300">
            <div className="py-20 overflow-hidden">
                <div className="container mx-auto px-4 mb-4 flex flex-col gap-3 text-center mb-12">
                    <h3 className="text-4xl font-bold ">My Work</h3>
                    <p className="text-gray-500">This is a list of my current and previous projects of work. Use the menu below to see project
                        titles and their statuses</p>
                </div>

                {/* Filters */}


                {/* Work carousel */}
                <Slider {...settings}>
                    {projects.filter(e => !e.hidden).map((p, index) => <Tilt  className={`Tilt my-4 mx-0`}  options={{max: 10, perspective: 2000, scale: 1}}>
                        <ProjectCard key={~~(Math.random()*3000)} data={p}/></Tilt>)}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
