import "./App.css";
import Carteira from "./carteira.component";
import fotoVal from "./foto-val.jpeg";

function App() {
  return (
    <div className="App">
      <Carteira
        nome="VALERIA GUIMARÃES FLORO"
        curso="Bacharelado em Engenharia Biomédica"
        rg="003461355"
        dataNasc="17/11/1994"
        foto={fotoVal}
      />
    </div>
  );
}

export default App;
