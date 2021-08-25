import React from 'react';
import ProjectCard from "./ProjectCard";
import {projects} from "../data/constants";

const Projects = (props) => {
    return (
        <div className="Projects bg-gray-100">
            <div className="container mx-auto px-4 py-20">
                <div className="mb-4 flex flex-col gap-3 text-center mb-12">
                    <h3 className="text-4xl font-bold">My Work</h3>
                    <p>This is a list of my current and previous projects of work. Use the menu below to see project
                        titles and their statuses</p>
                </div>

                <div className="grid gap-4 grid-cols-2">
                    {projects.filter(e => !e.hidden).map((p, index) => <ProjectCard key={index} data={p}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;
