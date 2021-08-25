import {React, useEffect} from 'react';
import Snapshot from "./Snapshot";

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
            <div className="absolute top-1/2 left-1/2 transform  -translate-y-1/2 -translate-x-1/2">
                <Snapshot/>
            </div>
        </div>
    );
};

export default Intro;
