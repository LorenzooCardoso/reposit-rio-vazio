import React, { createContext, useState } from 'react';

const ListaContext = createContext();

const Listas = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item.name.trim() !== "" && item.band.trim() !== "" && item.role.trim() !== "") {
      setItems([...items, item]);
    }
  };

  return (
    <ListaContext.Provider value={{ items, addItem }}>
      {children}
    </ListaContext.Provider>
  );
};

export { Listas, ListaContext };
