import avatar from '../assets/me.jpg';
import FindMe from './FindMe';
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
                'Laravel',
                'Angular',
                'Flutter'
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


            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold py-3 text-center ">Hi 👋, I'm Badr Mamatahir</h2>

            <div className={"pl-2 inline-block  p-2 bg-black gradient-border"}>
                <h1 className="text-md whitespace-nowrap">I'm <span className="font-bold" style={{ whiteSpace: 'pre' }} ref={el} />developer</h1>
            </div>

            <p className={"my-3 text-gray-300 text-center"}> I design
                and develop web and mobile apps for startups, small and medium
                businesses.</p>


            <FindMe/>
        </div>
    );
}

export default Snapshot;
