import React from 'react';
import {links} from "../data/constants";

const Link = ({link, name, external = false, attr = {}, children, classes = '', dark = false}) => {

    classes += dark ? ' text-yellow-400 hover:text-yellow-300' : ' text-blue-700 hover:text-blue-800';

    let extra = {};
    if(external)
        extra['rel'] = 'noreferrer'

    return (
        <a className={'Link hover:underline' + classes} href={link ?? '#'}
           target={external ? '_blank' : '_self'} {...attr} {...extra} >
            {name ?? children ?? link}
        </a>
    );
};

export default Link;
