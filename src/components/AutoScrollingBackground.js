import React, {useState, useEffect} from 'react';

const AutoScrollingBackground = ({src}) => {
    let [yPos, setYPos] = useState(0);

    useEffect(function(){
        let img = new Image();
        img.src = src;
        img.onload = () =>{
            if(img.height > 350)
                setInterval(()=> {
                    setYPos(++yPos)
                }, 100)
        };

        return stopAnimation
    },[])

    function stopAnimation() {

    }

    return (
     <div className="h-full" style={{backgroundImage: 'url(' + src+ ')', backgroundPositionY: yPos  + '%', backgroundPositionX: 'center', backgroundSize: "cover" }} onMouseOver={stopAnimation}>
    </div>
 );
};

export default AutoScrollingBackground;
