/*
Diseñe el componente que muestre su nombre, edad y pasatiempo
A continuación, muéstrelo 2 veces en su aplicación
Modifique el componente para que los datos sean parametrizados
*/

import React from 'react'

export default function Ejercicio(props) {
  return (
    <div>
      <p>Nombre: {props.nombre} </p>
      <p>Edad: {props.edad}</p>
      <p>
        Pasatiempo: <strong>{props.pasatiempo}</strong>
      </p>
    </div>
  );
}
