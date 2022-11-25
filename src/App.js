import { useState } from 'react';
import Chute from './components/Chute';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import palavras from './palavras';

export default function App() {
	const [choseWord, setChoseWord] = useState([]);
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(0);
	const [disabledLetters, setDisabledLetters] = useState([]);
  const [isWinner, setIsWinner] = useState(false)

	return (
		<div className="App">
			<Jogo
				words={palavras}
				choseWord={choseWord}
				setChoseWord={setChoseWord}
				setIsClicked={setIsClicked}
        setCount={setCount}
				count={count}
        setDisabledLetters={setDisabledLetters}
				disabledLetters={disabledLetters}
        setIsWinner={setIsWinner}
        isWinner={isWinner}
			/>
			<Letras
				isClicked={isClicked}
				choseWord={choseWord}
				count={count}
				setCount={setCount}
				disabledLetters={disabledLetters}
				setDisabledLetters={setDisabledLetters}
        isWinner={isWinner}
        setIsWinner={setIsWinner}
			/>
			<Chute />
		</div>
	);
}
