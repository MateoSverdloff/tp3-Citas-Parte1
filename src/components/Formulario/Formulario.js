import React, { useState } from 'react';
import { InputFormulario } from '../InputFormulario/InputFormulario';

export function Formulario({ agregarCita }) {
  const [nuevaCita, setNuevaCita] = useState({
    mascota: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(nuevaCita);
    setNuevaCita({
      mascota: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputFormulario
        label="Nombre Papu"
        type="text"
        name="mascota"
        placeholder="Nombre de la mascota"
        value={nuevaCita.mascota}
        onChange={handleChange}
      />
      <InputFormulario
        label="Fecha"
        type="date"
        name="fecha"
        value={nuevaCita.fecha}
        onChange={handleChange}
      />
      <InputFormulario
        label="Hora"
        type="time"
        name="hora"
        value={nuevaCita.hora}
        onChange={handleChange}
      />
      <InputFormulario
        label="Sintomas"
        type="text"
        name="sintomas"
        placeholder="Descripción de los síntomas"
        value={nuevaCita.sintomas}
        onChange={handleChange}
      />
      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </form>
  );
}