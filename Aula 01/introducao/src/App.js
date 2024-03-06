import MeusDados from "./components/atividade00/01MeusDados";
import MeusDados2 from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatua";

function App() {
  return (
    <div className="App">
    <h1>Atividade 00 de desenvolvimento WEB</h1>
    <hr/>
    <h2>Atividade 1</h2>
    <MeusDados/>
    <hr/>
    <h2>Atividade 2</h2>
    <MeusDados2 nome={"Francisco Gabriel"} curso={"Sistemas de infomração"} univesidade={"Universidade federal do Ceará"}/>
    <hr/>
    <h2>Atividade 3</h2>
    <Temperatura temperatura={80}/>
    </div>
  );
}

export default App;
