import {React, useEffect} from 'react';
import Snapshot from "./Snapshot";
import Logo from "../assets/logo.png";
import FindMe from "./FindMe";

const Intro = (props) => {
    useEffect(() => {
        window.VANTA.HALO({
            el: "#fancy-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0x0,
            size: 1.9,
        })
    }, [])

    return (
        <div id="fancy-bg" className="text-white h-screen relative overflow-hidden">
            <div className="bg-white rounded-full w-16 h-16 py-1 absolute left-1/2 transform -translate-x-1/2 mt-5 over">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform  -translate-y-1/2 -translate-x-1/2">
                <Snapshot/>
            </div>

            <div className="absolute bottom-4 left-1/2 transform  -translate-y-1/2 -translate-x-1/2 bg-black p-2 px-3 shadow-lg rounded-lg bg-opacity-50">
                <FindMe/>
            </div>
        </div>
    );
};

export default Intro;
