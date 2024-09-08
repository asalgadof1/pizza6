// src/pages/Home.js
// src/pages/Home.js
import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row">
        {pizzas.length === 0 ? (
          <p>No pizzas available at the moment.</p>
        ) : (
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">Price: ${pizza.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(pizza)}
                    className="btn btn-primary"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
