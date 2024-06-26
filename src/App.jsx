import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Shop } from "./pages/shop/shop.jsx";
import { Contact } from "./pages/contact/contact.jsx";
import { Cart } from "./pages/cart/cart.jsx";
import { Home } from "./pages/home/home.jsx";
import { ShopContextProvider } from "./components/context/shop-context.jsx";
 
 
 

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
        </ShopContextProvider>
       
       
    </div>
  );
};

export default App;
