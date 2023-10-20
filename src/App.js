//import logo from './logo.svg';
import './App.css';
import Appform from './components/Appform';
//import C01componente from './components/C01componente';
//import Variable from './components/C04variable';
//import MatrizOperaciones from './components/P7matrizOperaciones';


function App() {
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px", textAlign:"center"}}>
      <h1>App.js</h1>
      <Appform></Appform>
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino-------------x-----A</p>
      <p>2. Rosa Maria  25 Femenino---------------x-----A</p>
      <p>3. Luis Miguel 40 Masculino--------------x-----A</p>
    </div>
  );
}

export default App;
