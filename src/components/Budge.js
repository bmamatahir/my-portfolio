import React from 'react';

export const ProjectStatus = {
    Development: {label: 'Development', color: '#0000FF'},
    Active: {label: 'Active', color: '#00FF00'},
    OnHold: {label: 'On hold', color: '#FF7F00'},
    Ceased: {label: 'Ceased', color: '#FF0000'},
    Planning: {label: 'Planning', color: '#4B0082'},
};

const Budge = ({label, color}) => {
    return (
        <div className="pt-8 pb-2 px-2 font-medium text-white rounded-b-lg" style={{backgroundColor: color}}>
            {label}
        </div>
    );
};

export default Budge;
