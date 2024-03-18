import Pai from "./components/atividade01/questao01/01Pai";
import {Pc,PlacaDeVideo, Memoria, PlacaMae} from "./components/atividade01/questao02/02MeuPc";
function App() {
  return (
    <div className="App">
    	<h1>Atividade 00 de desenvolvimento WEB</h1>
    	<hr/>
    	<Pai/>
    	<Pc>
			<PlacaDeVideo preco={100} nome={"gtx-1050"}/>
			<PlacaMae preco={150} nome="intel" />
			<Memoria preco={88} nome = "Fury" />
    	</Pc>
    </div>
  )
}

export default App;
