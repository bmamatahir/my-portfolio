import {ProjectStatus} from "../components/Budge";
import {Technologies} from "../components/Technology";



function loadImage(companyName, artword) {
    return require(`../assets/projects/${companyName}-${artword}.${artword === 'logo' ? 'png' : 'jpg'}`).default;
}

export const projects = [
    {
        logo: loadImage('spotbusiness', 'logo'),
        status: ProjectStatus.Active,
        name: 'Spotbusiness',
        visitLink: 'https://spotbusiness.ma',
        technologies: [Technologies.Laravel, Technologies.Livewire, Technologies.Odoo, Technologies.CMI],
        github: null,
        color: '#3c57e0',
        description: `
            I Built and maintained web-based e-commerce rental subscriptions platform for business center, from idea to production, this project is published and well known for google boots, that means good references and respect SEO norms. 
            Also ODOO came to play as a backend.
        `,
        screenshots: loadImage('spotbusiness', 'screenshots'),
        hidden: false,
    },
    {
        logo: loadImage('spotbills', 'logo'),
        status: ProjectStatus.Active,
        name: 'Spotbills',
        visitLink: 'https://spotbills.com',
        technologies: [Technologies.Angular, Technologies.ThreeJs, Technologies.RxJs],
        github: null,
        color: '#FFCD65',
        description: `
            A static website describe the company products and services in creative manner with the power of Three.js. 
            We developed a 3D world and a smart smooth UX, and we toke advantage of Angular as front-end to enhance user interactivity and website performance.
        `,
        screenshots: loadImage('spotbills', 'screenshots'),
        hidden: false,
    },
    {
        logo: loadImage('spotfit', 'logo'),
        status: ProjectStatus.OnHold,
        name: 'Spotfit',
        technologies: [Technologies.Angular, Technologies.Laravel, Technologies.Ionic, Technologies.Cordova],
        color: '#DDBCFF',
        github: null,
        screenshots: loadImage('spotfit', 'screenshots'),
        description: `
            Platform where each member has his own customizable application (client, gym owner, admin), plus a brochure website.
            The application allows customers to explore gyms and pay gym passes with multiple methods of payment. 
            The app is hybrid and the code has been written inside Angular framework and wrapped withing a Cordova webview to target multiple platform especially Android and IOS systems.  
        `,
        hidden: false,
    },
    {
        logo: loadImage('peer', 'logo'),
        status: ProjectStatus.Ceased,
        name: 'Peer',
        technologies: [Technologies.Flutter, Technologies.WebRTC, Technologies.NodeJs, Technologies.MongoDB, Technologies.SocketIO],
        color: '#708DE9',
        github: null,
        screenshots: require('../assets/projects/peer-screenshots.jpg').default,
        description: `
              Decentralized instant messaging app built on top of Flutter framework, 
              using webRTC technology for P2P to perform Video/Audio calls, with high intention to security considering the data transmission are totally 
              E2E encryption and powered by AI.
        `,
        hidden: false,
    },
]
