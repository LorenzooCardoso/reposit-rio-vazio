import React from 'react';
import Lista from './componentes/Lista';
import { Listas } from './componentes/ListaContext';


const App = () => {
  return (
    <Listas>
      <Lista />
    </Listas>
  );
};

export default App;
