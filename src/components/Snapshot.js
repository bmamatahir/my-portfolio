import avatar from '../assets/me-again.jpg';
import {useEffect, useRef} from "react";
import Typed from 'typed.js';

const Snapshot = () => {

    // Create reference to store the DOM element containing the animation
    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Front End',
                'Back End',
                'Mobile'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,

        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div id="snapshot-card" className="mx-auto p-3 rounded-lg border animated-border h-96 w-96 flex flex-col justify-center items-center">

            <img src={avatar} alt="avatar"
                 className={" w-28 h-28 mb-4 rounded-full ring-2 ring-yellow-500 ring-opacity-50 p-1"}/>

            <div className="introduce mb-3 text-center">
                <div>Hey there 👋! I'm-</div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center "> <span className="text-yellow-300">Badr Mamatahir.</span></h2>
            </div>

            <div className={"pl-2 inline-block  p-2 bg-black text-center w-52 gradient-border bg-opacity-50 rounded-full"}>
                <div className="text-md whitespace-nowrap"><span className="font-bold" style={{ whiteSpace: 'pre' }} ref={el} /> Developer</div>
            </div>

            <h1 className={"my-3 text-gray-300 text-center"}> I design
                and develop web and mobile apps for startups, small and medium
                businesses.</h1>


        </div>
    );
}

export default Snapshot;
