import React from 'react';

const Footer = (props) => {
 const currentYear = new Date().getFullYear();

 return (
  <div className="Footer pb-6 pt-52 text-center bg-indigo-800 text-white">
      © {currentYear}, Developed and designed <span className="whitespace-nowrap">with ❤️ by Badr Mamatahir</span>
  </div>
 );
};

export default Footer;
