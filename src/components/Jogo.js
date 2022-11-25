export default function Jogo({words, choseWord, setChoseWord, isClicked, setIsClicked, count, disabledLetters}) {
	console.log(choseWord)

	function choseWordButton() {
		if (choseWord.length === 0) {
			setChoseWord(words.sort(() => Math.random() - 0.5)[0].split(''))
			setIsClicked(!isClicked)
		}
	}

	function switchImage() {
		switch (count) {
			case 0:
				return './assets/forca0.png'
			case 1:
				return './assets/forca1.png'
			case 2:
				return './assets/forca2.png'
			case 3:
				return './assets/forca3.png'
			case 4:
				return './assets/forca4.png'
			case 5:
				return './assets/forca5.png'
			default:
				return './assets/forca6.png'
		}
	}

	return (
		<div id="game">
			<div id="game-image">
				<img src={switchImage()} alt="" />
			</div>
			<div id="game-play">
				<button onClick={choseWordButton}>Escolher Palavra</button>
				<h1 className={count >= 6 ? 'lost' : ''}>{count >= 6 ? choseWord : choseWord.map(a => disabledLetters.includes(a) ? a : '_ ')}</h1>
			</div>
		</div>
	);
}
