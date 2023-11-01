//import logo from './logo.svg';
import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot } from 'firebase/firestore';
import './App.css';
import { useEffect, useState } from 'react';
import Appform from './components/Appform';
//import C01componente from './components/C01componente';
//import Variable from './components/C04variable';
//import MatrizOperaciones from './components/P7matrizOperaciones';
import { db } from "./firebase/firebase";


function App() {

   ///// READ - LECTURA - fnRead //////
   const [docBD, setDocBD] = useState([]);
   
   const fnRead = () => {
    try {
      const xColeccionConQuery = query(collection(db, "persona"));
      //const xColeccionConQuery = query(collection(db, "persona", where("nombre", "!=", "")))
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach( (doc) => {
          //xDoc.push(doc.data().nombre);                       ///Datos como "texto" en array
          //xDoc.push(doc.id);                                  ///Datos "ID" como "texto" en array
          //xDoc.push(doc.data());                              ///Datos como "Objeto"
          //xDoc.push({id: doc.id});                            ///Datos "ID" como "objeto" con indice "id"  
          xDoc.push({id: doc.id, ...doc.data()});
          //console(id: doc.id, ...doc.data())
          //console.log({id: docV.id, ...docV.data()});
        });
        //console.log("Resultado...: ", xDoc.join(", "));       ///Comentar sino bucle infinito
        setDocBD(xDoc);
        //console.log(docsBD);                                  ///Error lectura debe ser afuera
      });

    } catch (error) {
      console.error(error);
    }
  }
  //fnRead();
  useEffect( () => {
    fnRead();
  }, []);
  

   ///// DELETE - ELIMINAR - fnDelete /////
   const [idActual, setIdActual] = useState("");
   const fnDelete = async (xId) =>{
    //console.log(xId);
    if (window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se elimino... "+xId);
    } 
    //fnRead();     //No es necesario, fue cambiado por otra fn en useEffect
   }

  return (
    <div style={{background:"yellow", width:"350px", padding:"10px", textAlign:"center"}}>
      <h1>App.js</h1>
      <Appform {...{idActual, setIdActual, fnRead}}></Appform>
      {
        docBD.map((p) =>
          <p key={p.id}>
            No. 1 {p.nombre} ....
            <span onClick={() => fnDelete(p.id)}> x </span>
            ...
            <span onClick={() => setIdActual(p.id)}> A </span>
          </p>
        )
      }
      <i class="large material-icons">insert_chart</i>
    </div>
  );
}

export default App;