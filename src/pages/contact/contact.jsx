import React from "react";
import './contact.css';
import { Phone } from "phosphor-react";
import { Envelope } from "phosphor-react";
import Footer from "../../components/footer/footer.jsx";

export const Contact = () => {
  return <div id="contacts-container">
    <div id="contactus">Contact us: 
    <div id="links"><br />
      <a href="andreearoiu5@gmail.com">Email <Envelope size={30}  /></a> <br />
      <br />
      <a href="tel:+0749505132">Telefon<Phone size={30} /></a>
    </div>
    </div>
    <Footer />
  </div>
};
