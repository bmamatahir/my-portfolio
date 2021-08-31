import React from 'react';

const SkillCard = ({technology = {}, children}) => {

    const {icon, color, label} = technology;
    return (
        <div className={`SkillCard bg-white rounded-lg shadow flex flex-col items-center  w-28 h-28 p-4`}>
            {icon({color: color, size: '100%'})}
            <h2 className="font-medium">{label}</h2>
        </div>
    );
};

export default SkillCard;
