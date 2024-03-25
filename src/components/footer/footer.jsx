import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p>&copy; {currentYear} Soulful sips. All rights reserved.</p>
    </footer>
  );
};

 

export default Footer;
