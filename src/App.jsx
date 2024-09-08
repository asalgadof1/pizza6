import React from "react";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext"; // Importar el PizzaProvider
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <PizzaProvider> {/* Envolvemos la aplicación con PizzaProvider */}
      <CartProvider> {/* Envolvemos la aplicación con CartProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </PizzaProvider>
  );
}

export default App;
