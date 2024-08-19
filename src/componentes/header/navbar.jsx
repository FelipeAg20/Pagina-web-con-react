import React from "react";
import  ".././styles/navbar.css"
import {Link} from 'react-router-dom'
function Navbar () {
  return (
    <nav >
      <ul className="navBar">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
        <Link to="/nuestracompañia">Nuestra compañia</Link>
        </li>
        <li>
        <Link to="/nuestrosvalores">Nuestros valores</Link>
        </li>
        <li>
        <Link to="/contactanos">Contactanos</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
