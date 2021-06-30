import './HoverBorder.css';
import { useEffect } from 'react';

function HoverBorder(props) {
    const {link} = props;

    return (
        <a href={link} target="_blank" className="bx flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <line className="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line className="left" x1="0" y1="35" x2="0" y2="-920"></line>
                <line className="bottom" x1="35" y1="35" x2="-600" y2="35"></line>
                <line className="right" x1="35" y1="0" x2="35" y2="1380"></line>
            </svg>

            {props.children}
        </a>
    );
}

export default HoverBorder;
