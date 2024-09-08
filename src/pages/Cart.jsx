// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th> {/* Agregamos la columna para la imagen */}
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td> {/* Mostramos la imagen del producto */}
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-secondary mx-2"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${totalPrice.toFixed(2)}</h3> {/* Mostrar el total en la página del carrito */}
        </>
      )}
    </div>
  );
};

export default Cart;
