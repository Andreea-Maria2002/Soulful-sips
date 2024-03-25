import React from 'react';
import Footer from "../../components/footer/footer.jsx";
import './home.css';

export const Home = () => {
  return (
    <div id="container"> 
      <h2>Ce este cafeaua de specialitate?</h2> <img src="coffee-cup.png" alt="coffee-cup" width="50"/>
        <div><p id="p1">Termenul  de "cafea de specialitate" a fost utilizat pentru prima oara in anul 1974  in - Jurnalul de comert cu ceai si cafea - pentru a descrie o cafea rara, de inalta calitate. Aceasta cafea exceptionala a fost consumata mai intai in cafenelele americane in anii 1970, dupa care a ajuns in Europa in anii 1980.</p>
        <br />
        <p id="p2">Pentru ca boabele sa fie considerate de specialitate, acestea trebuie :
                 <br />
        - sa fie notate peste 80/100 conform protocolului de notare SCA;
        <br />
        - sa fie trasabile pana la ferma;
        <br />
        - sa nu contina defecte din categoria 1 (exemple : bucati mari de lemn, boabe negre...) si maximum 5 defecte din categoria 2 (exemple : pietre mici, boabe de cafea sparte...) pentru un esantion de 300g.</p>
        <img src="boabe.png" alt="boabe" id="beans" width="150" /></div>
        <br />
        <p id="p3">Recoltarea boabelor de cafea este condiționată de tipul de teren și de dimensiunea plantației.

        Sunt doua variante principale,mecanic si manual.
        Recoltarea mecanică este cea mai rapidă însă prea puțin selectivă în sensul că sunt preluate atât fructele coapte cât și cele verzi.
        Recoltare manuală presupune mult mai multă manoperă însă oferă posibilitatea boabelor de cafea astfel culese să dea naștere unora din cele mai apreciate cafele din ceașcă.
        Acesta este unul din factorii care explică diferențele mari de preț între diferitele sortimente de cafea.
        Mai mult, culegerea manuală poate fi realizată bob cu bob sau prin desprinderea concomitentă a mai multor cireșe de cafea de pe ramură. De aici rezultă o nouă diferențiere calitativă.</p>
        <img src="cirese-de-cafea.png" alt="cirese" id="cirese"/>
      <Footer />
    </div>
  );
};

