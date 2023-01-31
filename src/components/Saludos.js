import React from 'react'


/*El componente Saludos, recibe como parámetro el nombre de la persona. El saludo debe nombrar esa persona
Pase también el apelido de la persona
*/

export default function Saludos(props) {
  return (
      <div>Hola{props.nombre} { props.apellido}, bienvenidos a la PUCESE</div>
  )
}
