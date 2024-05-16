import React from 'react';

export function Cita({ cita, eliminarCita }) {
  const { mascota, dueño, fecha, hora, sintomas, id } = cita;

  const handleEliminarCita = () => {
    eliminarCita(id);
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button className="button eliminar u-full-width" onClick={handleEliminarCita}>Eliminar ×</button>
    </div>
  );
}