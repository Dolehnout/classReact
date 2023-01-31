import "./App.css";
import Saludos from "./components/Saludos";
import Ejercicio from "./components/Ejercicio";
import Homework from "./components/Homework";
import TareasAdd from "./components/TareasAdd";
import { datos } from "./components/Objects";
import { useState } from "react";

function App() {
  const [data, setData] = useState(datos);
  const eliminarClick = (item) => {
    console.log("eliminando", item.titulo);
    if (window.confirm("¿Seguro que quieres eliminar?")) {
      const newList = data.filter((tareas) => {
        return tareas.titulo !== item.titulo;
      });
      setData(newList);
    }
  };

  const guardarTarea = (tarea) =>{
    console.log("esta es la nueva tarea", tarea);
    setData([...data, tarea])
  }
  return (
    <div className="App ">
      <header className="App-header back-color">
        <h1 className="App-title">Primeros pasos con REACT</h1>
        <h2 className="App-title">Bienvenidos</h2>
        <Saludos nombre=" Abigail" apellido="Dupont" />
        <Ejercicio nombre="Ángel" edad="15" pasatiempo="no encender la pc" />
        <div className="row">
          <div className="col-2">
            FORMULARIO ADD TAREA
            <TareasAdd guardarTarea = {guardarTarea}/>
          </div>
          <div className="col-10">
          <Homework datos={data} eliminarCl={eliminarClick} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
