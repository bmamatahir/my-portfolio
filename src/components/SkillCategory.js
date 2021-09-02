import React from 'react';

const SkillCategory = ({children, icon}) => {
    return (
        <div className="SkillCategory bg-black text-white rounded-lg shadow flex flex-col items-center  h-28 w-28 p-4">
            {icon({color: 'white', size: '100%'})}
            <h2 className="font-medium whitespace-nowrap">{children}</h2>
        </div>
    );
};

export default SkillCategory;
