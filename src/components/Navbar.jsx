// src/components/Navbar.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizza Store</Link>
        <Link to="/cart" className="btn btn-outline-success">
          Cart: ${totalPrice.toFixed(2)} {/* Mostrar el total en el Navbar */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

