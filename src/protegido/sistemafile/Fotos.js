import React from 'react'
import imagen1 from './imagenes/imagen1.jpg';
import imagen2 from './imagenes/imagen2.jpg';
import imagen3 from './imagenes/imagen3.jpg';
import imagen4 from './imagenes/imagen4.jpg';

const Fotos = () => {
  return (
    <div id='file'>
      <h1>Fotos</h1>
      ESTA PAGINA ESTA DESTINADA PARA FOTOS <br></br>
      Imagen 1 <br></br>
      <img src={imagen1} width="200" height="150"/> <br></br>

      Imagen 2 <br></br>
      <img src={imagen2} width="200" height="150"/> <br></br>

      Imagen 3 <br></br>
      <img src={imagen3} width="200" height="150"/> <br></br>

      Imagen 4 <br></br>
      <img src={imagen4} width="200" height="150"/> <br></br>
    </div>
  )
}

export default Fotos
