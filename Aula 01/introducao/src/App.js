import SistemaSolar from "./components/04Children/SistemaSolar";
import Planeta from "./components/04Children/Planeta";
//import {MeusDados as MD, MeusDadosv1 as Md1, MeusDadosv2} from "./components/atividade00/01MeusDados";
//import MeusDados2 from "./components/atividade00/02MeusDados";
//import Temperatura from "./components/atividade00/03Temperatua";

/**
 * <h2>Atividade 1</h2>
    <MD/>
    <Md1/>
    <MeusDadosv2/>
    <hr/>
    <h2>Atividade 2</h2>
    <MeusDados2 nome={"Francisco Gabriel"} curso={"Sistemas de infomração"} univesidade={"Universidade federal do Ceará"}/>
    <hr/>
    <h2>Atividade 3</h2>
    <Temperatura temperatura={80}/>
 * 
 */

function App() {
  return (
    <div className="App">
    <h1>Atividade 00 de desenvolvimento WEB</h1>
    <hr/>
    <SistemaSolar galaxia={"via lactia"}>
    	<Planeta nome="mercúrio" tipo={"Rochoso"} ordem={1}/>
   		<hr/>
        <Planeta nome="Vênus" tipo={"Rochoso"} ordem={2}/>
        <hr/>
        <Planeta nome="Terra" tipo={"Rochoso"} ordem={3}/>
        <hr/>
        <Planeta nome="Marte" tipo={"Rochoso"} ordem={4}/>
    </SistemaSolar>
    </div>
  );
}

export default App;
