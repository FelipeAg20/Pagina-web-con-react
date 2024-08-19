import React from 'react'
import ".././styles/cards.css";


function Cards(props) {
  return (
    <div className='cards'>
      <img src={props.imagen} alt="" />
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>

    </div>
  )
}


export default Cards
