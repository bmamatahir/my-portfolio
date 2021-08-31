import React from 'react';

const Footer = (props) => {
 const currentYear = new Date().getFullYear();

 return (
  <div className="Footer py-6 text-center">
      © {currentYear}, Developed and designed with ❤️ by Badr Mamatahir
  </div>
 );
};

export default Footer;
