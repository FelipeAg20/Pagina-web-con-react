import React from "react";
import ".././styles/primerDiv.css";

function PrimerDiv() {
  return (
    <>
      <div className="primerDiv">
        Envios GRATIS a todo el pais por compras superiores a 150.000 COP
      </div>
      <div className="segundoDiv">
        <input className= "input" type="text" placeholder="Buscar tus productos" />
      </div>
    </>
  );
}

export default PrimerDiv;
