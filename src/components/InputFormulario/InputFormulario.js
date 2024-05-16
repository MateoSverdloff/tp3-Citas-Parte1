import React from 'react';

export function InputFormulario({ label, type, name, placeholder, value, onChange }) {
  return (
    <> 
      <label>{label}</label>
      <input 
        type={type} 
        name={name} 
        className="u-full-width" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </>
  );
}