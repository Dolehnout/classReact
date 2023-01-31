import "./App.css";
import Saludos from "./components/Saludos";
import Ejercicio from "./components/Ejercicio";
import Homework from "./components/Homework";
import TareasAdd from "./components/TareasAdd";
function App() {
  return (
    <div className="App ">
      <header className="App-header back-color">
        <h1 className="App-title">Primeros pasos con REACT</h1>
        <h2 className="App-title">Bienvenidos</h2>
        <Saludos nombre=" Abigail" apellido="Dupont" />
        <Ejercicio nombre="Ángel" edad="15" pasatiempo="no encender la pc" />
        <Homework></Homework>
        <div className="row">
          <div className="col">
            <TareasAdd/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
