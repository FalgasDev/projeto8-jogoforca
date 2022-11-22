import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";

export default function App() {
  return (
    <div className="App">
      <Jogo />
      <Letras/>
      <Chute />
    </div>
  );
}