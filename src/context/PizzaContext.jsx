// src/context/PizzaContext.js
import React, { createContext, useState, useEffect } from 'react';
import { pizzas } from '../assets/Data/pizza.js'; // Importar el array directamente

// Crear el contexto
export const PizzaContext = createContext();

// Crear el proveedor del contexto
export const PizzaProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Simulamos una carga de datos para que puedas controlar el estado de 'loading'
    const loadPizzas = () => {
      setLoading(false); // Aquí se desactiva el estado de carga ya que los datos ya están disponibles
    };

    loadPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};
