import React from 'react'

const Appform = () => {
  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
      <h1>AppForm.js</h1>
      <h3></h3>
      <input placeholder='Nombres...'></input><br></br>
      <input placeholder='Edad...'></input><br></br>
      <input placeholder='Género...'></input><br></br>
      <br></br>
      <button>Guardar</button>
    </div>
  )
}

export default Appform