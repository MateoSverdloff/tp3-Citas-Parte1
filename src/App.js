import './App.css';
import { Cita } from './components/Cita/Cita';
import { Formulario } from './components/Formulario/Formulario';
export function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario/>
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Cita mascota='Yukelson' dueño='Iao' fecha='206 A.C-09-24' hora='14:30' sintomas='Esta viejo'/>
            <Cita mascota='Sifon' dueño='Mateo' fecha='2020-12-12' hora='01:00' sintomas='dice miau y es un perro'/>
            <Cita mascota='Iao' dueño='Yukelson' fecha='2006-10-12' hora='9:00' sintomas='Duerme todo el dia'/>
          </div>
        </div>
      </div>
    </>
  );
}
