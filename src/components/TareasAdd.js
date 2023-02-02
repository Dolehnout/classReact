import React from "react";

export default function TareasAdd({guardarTarea}) {
  const [titulo, setTitulo] = React.useState();
  const [descripcion, setDescripcion] = React.useState();
  const [responsable, setResponsable] = React.useState();
  const [prioridad, setPrioridad] = React.useState();

  const guardarHandler = (event) => {
    console.log("guardando");
    event.preventDefault();
    const tareaNueva ={
      "titulo": titulo,
      "nombre": responsable,
      "descripcion": descripcion,
      "prioridad": prioridad,
    }
    //console.log("nueva tarea: ", tareaNueva)
    guardarTarea(tareaNueva)
  };
    const nuevoTitulo = (event) => {
        console.log(event.target.value)
        setTitulo(event.target.value);
    }
    
    const nuevoResponsable = (event) => {
      console.log(event.target.value);
      setResponsable(event.target.value);
    };

    const nuevoDescripcion = (event) => {
      console.log(event.target.value);
      setDescripcion(event.target.value);
    };

    const nuevoPrioridad = (event) => {
      console.log(event.target.value);
      setPrioridad(event.target.value);
    };
  return (
    <div className="row mt-4">
      <div className="col">
        <form onSubmit={guardarHandler}>
          {" "}
          <div className="card mt-4">
            <div className="card header letter-colorTwo">
              <h1>Nueva Tarea</h1>
            </div>
            <div className="card-body">
              <div class="form-group letter-colorTwo">
                <label for="titulo">Título de la tarea</label>
                <input
                  type="text"
                  class="form-control"
                  id="titulo"
                  name="titulo"
                  placeholder="Título de la tarea"
                  value={titulo}
                  onChange={nuevoTitulo}
                  required
                />
              </div>
              <div class="form-group letter-colorTwo">
                <label for="titulo">Descripción Tarea</label>
                <input
                  type="text"
                  class="form-control"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripción de la Tarea"
                  value={descripcion}
                  onChange={nuevoDescripcion}
                  required
                />
              </div>
              <div class="form-group letter-colorTwo">
                <label for="titulo">Responsable</label>
                <input
                  type="text"
                  class="form-control"
                  id="responsable"
                  name="responsable"
                  placeholder="Responsable de la tarea"
                  value={responsable}
                  onChange={nuevoResponsable}
                  required
                />
              </div>
              <div class="form-group letter-colorTwo">
                <label for="titulo">Prioridad</label>
                <input
                  type="text"
                  class="form-control"
                  id="prioridad"
                  name="prioridad"
                  placeholder="Prioridad de la tarea"
                  value={prioridad}
                  onChange={nuevoPrioridad}
                  required
                />
              </div>
            </div>
            <div className="card-footer"></div>
            <button className="btn btn-success"> Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
