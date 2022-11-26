export default function Jogo({
	words,
	choseWord,
	setChoseWord,
	isClicked,
	setIsClicked,
	setCount,
	count,
	setDisabledLetters,
	disabledLetters,
	setIsWinner,
	isWinner,
}) {
	
	function choseWordButton() {
		if (choseWord.length === 0) {
			setChoseWord(words.sort(() => Math.random() - 0.5)[0].split(''));
			setIsClicked(true);
		} else {
			setChoseWord(words.sort(() => Math.random() - 0.5)[0].split(''));
			setIsClicked(true);
			setCount(0);
			setDisabledLetters([]);
			setIsWinner(false);
		}
	}

	function switchImage() {
		switch (count) {
			case 0:
				return './assets/forca0.png';
			case 1:
				return './assets/forca1.png';
			case 2:
				return './assets/forca2.png';
			case 3:
				return './assets/forca3.png';
			case 4:
				return './assets/forca4.png';
			case 5:
				return './assets/forca5.png';
			default:
				return './assets/forca6.png';
		}
	}

	function verifyClass() {
		if (count >= 6) {
			return 'lost';
		} else if (isWinner) {
			return 'win';
		} else {
			return '';
		}
	}

	function renderWord() {
		if (count >= 6) {
			return choseWord;
		} else if (isWinner) {
			return choseWord;
		} else {
			return choseWord.map((a) => (disabledLetters.includes(a) ? a : '_ '));
		}
	}

	return (
		<div id="game">
			<div id="game-image">
				<img data-test="game-image" src={switchImage()} alt="" />
			</div>
			<div id="game-play">
				<button data-test="choose-word" onClick={choseWordButton}>
					Escolher Palavra
				</button>
				<h1
					data-test="word"
					data-answer={isClicked ? choseWord.join('') : ''}
					className={verifyClass()}
				>
					{renderWord()}
				</h1>
			</div>
		</div>
	);
}
