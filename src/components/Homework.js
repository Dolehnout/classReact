/*
Componente que muestra las actividades (tareas) diarias de una persona
*/
import React from "react";
//import { datos } from "./Objects";
export default function Homework(props) {
  //const [listadoTareas, setListadoTareas] = useState(datos);

  console.log("Listado de tareas");
  //console.log(listadoTareas);

  const eliminarHandlerEvent = (item) => {
    console.log("datos a eliminar", item)
    props.eliminarCl(item)
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {props.datos.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card mt-4">
                  <div className="card header letter-color">
                    <h3>{item.titulo}</h3>
                  </div>
                  <div className="card-body letter-color">
                    <p>
                      <strong>{item.nombre}</strong>
                    </p>
                    <p>{item.descripcion}</p>
                  </div>
                  <div className="card-footer letter-color">
                    <mark>{item.prioridad}</mark>
                    <button
                      className="btn btn-primary offset-2"
                      type="button"
                      onClick={() => eliminarHandlerEvent(item)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
