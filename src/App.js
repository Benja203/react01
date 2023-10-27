//import logo from './logo.svg';
import './App.css';
import Appform from './components/Appform';
import { useState } from 'react';
//import C01componente from './components/C01componente';
//import Variable from './components/C04variable';
//import MatrizOperaciones from './components/P7matrizOperaciones';
import { db } from "./firebase/firebase";


function App() {

   ///// READ - LECTURA - fnRead //////
   const [docBD, setdocBD] = useState([]);
   const fnRead = () => {
   }
   ///// DELETE - ELIMINAR - fnDelete /////
   const [idActual, setIdActual] = useState("");
   const fnDelete =(xId) =>{
 
   }

  return (
    <div style={{background:"yellow", width:"350px", padding:"10px", textAlign:"center"}}>
      <h1>App.js</h1>
      <Appform {...{idActual}}></Appform>
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino-------------x-----A</p>
      <p>2. Rosa Maria  25 Femenino---------------x-----A</p>
      <p>3. Luis Miguel 40 Masculino--------------x-----A</p>
    </div>
  );
}

export default App;