/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cart.css";
import { Payment } from "./payment.jsx";
import Footer from "../../components/footer/footer.jsx";

export const Cart = () => {
 
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Produsele tale</h1>
      </div>
      <div className="cart">
      
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      
      {totalAmount > 0 ? (
        <div className="payment">
          <p> Subtotal: {totalAmount} lei </p>
          <div className="links">
          <Link id="linkBtn" to="/shop"><button onClick={() => navigate("/shop")}>Adauga mai multe </button></Link>
         
         <Payment />
        
         </div>
        </div>
      ) : (
        <h1 id="msg"> Cosul tau este gol </h1>
      )}
    <Footer />
    </div>
  );
};
 

     
 
 
