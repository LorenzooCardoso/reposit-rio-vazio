import React, { useContext, useState } from 'react';
import { ListaContext } from './ListaContext';
import './lista.css';

const Lista = () => {
  const { items, addItem } = useContext(ListaContext);
  const [newName, setNewName] = useState("");
  const [newBand, setNewBand] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleAddItem = () => {
    addItem({ name: newName, band: newBand, role: newRole });
    setNewName("");
    setNewBand("");
    setNewRole("");
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Artistas de uma Bandas</h1>
      <ol className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item.name} - {item.band} ({item.role})
          </li>
        ))}
      </ol>
      <div className="input-group">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="nome do artista"
          className="input"
        />
        <input
          type="text"
          value={newBand}
          onChange={(e) => setNewBand(e.target.value)}
          placeholder="nome da banda"
          className="input"
        />
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="função"
          className="input"
        />
        <button onClick={handleAddItem} className="button">Adicionar</button>
      </div>
    </div>
  );
};

export default Lista;