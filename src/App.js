import React, { useState } from 'react';
import './App.css';
import { Cita } from './components/Cita/Cita';
import { Formulario } from './components/Formulario/Formulario';

export function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    const citaConId = { ...nuevaCita, id: Date.now() };
    setCitas([...citas, citaConId]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}