
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import React from 'react';
import Usuarios from './pages/usuarios';
import RutaPrivada from './componentes/rutaPrivada';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/usuarios" element={
          <RutaPrivada>
            <Usuarios />
          </RutaPrivada>
        } />

      </Routes>
    </Router>
  );
}

export default App;



