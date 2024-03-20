import Pai from "./components/atividade01/questao01/01Pai";
import {Pc,PlacaDeVideo, Memoria, PlacaMae} from "./components/atividade01/questao02/02MeuPc";
import { Arena, Enemy, Hero, World } from "./components/atividade01/questao03/03Batalha";
import Pokemon from "./components/06Estados/Pokemon";
import Efeito from "./components/10Efeito/Efeito";
import ComponentePromessa from "./components/11Promessas/MinhaPromessa";
function App() {
  return (
    <div className="App">
		<h1>
			Aula 10
		</h1>
		<Efeito/>
		<ComponentePromessa/>
		<hr/>
    	<h1>Atividade 00 de desenvolvimento WEB</h1>
		<Pokemon/>
    	<hr/>
		<h1>atividade 01 de desenvolvimento WEB</h1>
    	<Pai/>
		<hr/>
    	<Pc>
			<PlacaDeVideo preco={100} nome={"gtx-1050"}/>
			<PlacaMae preco={150} nome="intel" />
			<Memoria preco={88} nome = "Fury" />
    	</Pc>
		<hr/>
		<World>
			<Arena name="Gotham city">
				<Hero name={"Batman"} img={"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"}/>
				<Enemy name={"joker"} img={"https://render.fineartamerica.com/images/rendered/default/flat/beach-towel/images/artworkimages/medium/2/joker-taking-aim-pixel-chimp.jpg"}/>
			</Arena>
			<Arena name={"Townsville"}>
				<Hero name={"Blossom"} img={"https://static.wikia.nocookie.net/powerpuff/images/2/23/Blossom-pic.png"}/>
				<Hero name={"Bubbles"} img={"https://static.wikia.nocookie.net/powerpuff/images/3/31/185px-Bubbles_%28Original%29_Pic.jpg"}/>
				<Hero name={"Buttercup"} img={"https://static.wikia.nocookie.net/powerpuff/images/1/14/Buttercup-pic.png"}/>
				<Enemy name={"mojo jojo"} img={"https://mir-s3-cdn-cf.behance.net/projects/max_808/32ddd3158733065.Y3JvcCwxMTc4LDkyMSwwLDEwNw.jpg"}/>
			</Arena>
		</World>
    </div>
  )
}

export default App;
