import { InputFormulario } from "../InputFormulario/InputFormulario";

export function Formulario(){
return(
<form>

    <InputFormulario label="Nombre Papu" type="text" name="mascota" placeholder="plase"/>
    <InputFormulario label="Fecha" type="date" name="fecha" placeholder="plase"/>
    <InputFormulario label="Hora" type="time" name="hora" placeholder="----/--/--"/>
    <InputFormulario label="Sintomas" type="text" name="sintomas" placeholder=""/>
    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
  </form>
  );
}