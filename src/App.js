import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

export default function App() {
  const [choseWord, setChoseWord] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0)
  const [disabledLetters, setDisabledLetters] = useState([])

  return (
    <div className="App">
      <Jogo words={palavras} choseWord={choseWord} setChoseWord={setChoseWord} isClicked={isClicked} setIsClicked={setIsClicked} count={count} disabledLetters={disabledLetters}/>
      <Letras isClicked={isClicked} choseWord={choseWord} count={count} setCount={setCount} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
      <Chute />
    </div>
  );
}