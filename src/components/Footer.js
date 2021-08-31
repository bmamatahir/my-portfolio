import React from 'react';

const Footer = (props) => {
 const currentYear = new Date().getFullYear();

 return (
  <div className="Footer py-6 text-center">
      © {currentYear}, Developed and designed <span className="whitespace-nowrap">with ❤️ by Badr Mamatahir</span>
  </div>
 );
};

export default Footer;
