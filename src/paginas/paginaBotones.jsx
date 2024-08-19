import React from 'react'

function paginaBoton({tituloBoton,contenidoBoton,enlaceBoton}) {
  return (
    <div>
        <h2>{tituloBoton}</h2>
        <p>{contenidoBoton}</p>
        <img src={enlaceBoton} alt="" />
    </div>
  )
}
export default paginaBoton