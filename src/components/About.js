import React from 'react';
import Link from "./Link";
import {links} from "../data/constants";
import avatar from '../assets/me.jpg'

const About = (props) => {
    return (
        <div className="About" style={{background: 'linear-gradient(black , rgb(209 213 219))'}}>
            <div className="container px-4 py-8 md:py-20 mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="justify-self-end hidden md:block">
                    <img src={avatar}/>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-8 text-white">⚡ About <span className="text-yellow-400">Me</span></h3>
                    <div className="justify-self-end block md:hidden  mr-4 w-2/5 float-left">
                        <img src={avatar} className="rounded"/>
                    </div>
                    <p className="text-white">
                        <p className="mb-3">I'm a full-stack developer at spotbills startup based in marina Casablanca,
                            where I build native and hybrid applications that target web and mobile platforms. I'm graduated with a bachelor degree in computer science and I have 3+ years of experience.</p>
                        <p className="mb-3">I've enjoyed writing clean code, that humans and machines can understand.
                            that's why I give high priority to design patterns in the self-learning process, I'm also
                            addicted to solving problems and read about algorithms, to keep this part of me
                            alive. I track my effort in that aspect on <Link link={links.codinGame} name="Codingame" dark={true}/> .
                        </p>
                        <p className="mb-3">And to keep me up-to-date about the digital world, I push myself to
                            participate in many events with various topics (AI, machine learning, Networking) and
                            contribute inside projects. Until now I open-sourced two projects both are available in
                            my <Link link={links.github} dark={true}>GitHub profile</Link>.</p>
                        <p className="mb-3">I'm have been volunteering in charity for non-profit organizations such
                            as <Link link={links.jood} dark={true}>Jood</Link> part-time to help people in need. For anybody who
                            carries any business idea that serves this aspect, I'm ready to share my knowledge and
                            expertise for free.</p>
                        <p className="mb-3">Besides coding, photography and drawing are my hobbies.</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
