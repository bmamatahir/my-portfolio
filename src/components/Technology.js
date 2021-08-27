import React from 'react';

export const Technologies = {
    /* Frameworks & libraries */

    Laravel: {label: 'Laravel', color: '#F72C1F'},
    Livewire: {label: 'Livewire', color: '#F36CA4'},
    Odoo: {label: 'Odoo', color: '#9D4485'},
    Flask: {label: 'Flask', color: '#000000'},
    Flutter: {label: 'Flutter', color: '#5CC4F0'},
    WebRTC: {label: 'WebRTC', color: '#F7C600'},
    SocketIO: {label: 'SocketIO', color: '#010101'},
    Angular: {label: 'Angular', color: '#D6002F'},
    Cordova: {label: 'Cordova', color: '#4C5562'},
    Ionic: {label: 'Ionic', color: '#4786F7'},
    jQuery: {label: 'jQuery', color: '#0B66A9'},
    jQueryUI: {label: 'jQuery UI', color: '#F2A022'},
    WordPress: {label: 'WordPress', color: '#007095'},
    Bootstrap: {label: 'Bootstrap', color: '#6E12EF'},
    Tailwind: {label: 'Tailwind', color: '#0CA4B2'},
    React: {label: 'React', color: '#48CEF7'},
    CMI: {label: 'CMI Payment gateway', color: '#EE4230'},
    ThreeJs: {label: 'ThreeJs', color: '#403D7E'},
    RxJs: {label: 'RxJs', color: '#A1008D'},
    AJAX: {label: 'AJAX', color: '#0780C6'},
    AngularMaterialUI: {label: 'AngularMaterialUI', color: '#F38800'},
    GoogleMaps: {label: 'Google Maps', color: '#32A34F'},
    IoT: {label: 'IoT', color: '#57514F'},
    PayPal: {label: 'PayPal', color: '#002E82'},
    Docker: {label: 'Docker', color: '#1993EF'},


    /* Programing Languages */
    PHP: {label: 'PHP', color: '#4F5D95'},
    Javascript: {label: 'Javascript', color: '#EFD81D'},
    Python: {label: 'Python', color: '#3572A5'},
    NodeJs: {label: 'NodeJs', color: '#43853D'},
    HTML5: {label: 'HTML5', color: '#ff3e00'},
    CSS3: {label: 'CSS3', color: '#2862E9'},

    /* Databases */
    Postgres: {label: 'Postgres', color: '#336791'},
    MongoDB: {label: 'MongoDB', color: '#52A74B'},
    MySql: {label: 'Mysql', color: '#E48D06'},
    SqLite: {label: 'SqLite', color: '#379BD9'},


};

const Technology = ({label, color}) => {
    return (
        <div className="rounded-full leading-none p-1 px-2 font-medium text-white inline-block opacity-60"
             style={{backgroundColor: color}}> {label}</div>
    );
};

export default Technology;
