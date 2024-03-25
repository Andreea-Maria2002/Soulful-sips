import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Coffee } from "phosphor-react";
import Footer from "../../components/footer/footer.jsx";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
         <h3>Specialty coffee beans and more <Coffee size={30}/></h3>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
