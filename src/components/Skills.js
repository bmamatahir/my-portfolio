import React from 'react';
import SkillCard from "./SkillCard";
import {Technologies} from "./Technology";
import {BiCodeAlt, BiPackage, FiDatabase, VscDeviceMobile, VscServerProcess} from "react-icons/all";
import SkillCategory from "./SkillCategory";

const Skills = (props) => {
    const techSkills = [
        {
            name: 'Front End', icon: BiCodeAlt, items: [
                Technologies.HTML5,
                Technologies.CSS3,
                Technologies.Angular,
                Technologies.React,
                Technologies.jQuery,
                Technologies.Tailwind,
                Technologies.Bootstrap,
            ]
        },
        {
            name: 'Backend', icon: BiCodeAlt, items: [
                Technologies.Laravel,
                Technologies.NodeJs,
                Technologies.ExpressJs,
            ]
        },
        {
            name: 'Languages', icon: BiCodeAlt, items: [

                Technologies.Javascript,
                Technologies.PHP,
                Technologies.Dart,
                Technologies.Python,
                Technologies.Typescript,
            ]
        },
        {
            name: 'Mobile', icon: VscDeviceMobile, items: [
                Technologies.Flutter,
                Technologies.PWA,
                Technologies.Cordova,
                Technologies.Ionic,
            ]
        },
        {
            name: 'Databases', icon: FiDatabase, items: [
                Technologies.Postgres,
                Technologies.MongoDB,
                Technologies.MySql,

            ]
        },
        {
            name: 'CRM & ERP', icon: BiPackage, items: [
                Technologies.Odoo,
                Technologies.WordPress,
            ]
        },
        {
            name: 'DevOps', icon: VscServerProcess, items: [
                Technologies.Git,
                Technologies.Docker,
            ]
        },
    ];

    return (
        <div className="Skills bg-yellow-400 py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-3 mb-7">
                    <h3 className="text-4xl font-bold ">🔨 Technical Skills</h3>
                    <p className="text-gray-500">Startup businesses pushed me to play with various technologies
                        stack. I listed below my work equipment and expertise level</p>
                </div>

                <div className="flex gap-4 flex-wrap">
                    {
                        techSkills.map(s => [
                            <SkillCategory key={Math.random()} icon={s.icon}>{s.name}</SkillCategory>,
                            ...s.items.map((t, i) => <SkillCard key={Math.random()} technology={t}/>)
                        ]).flat()
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;
