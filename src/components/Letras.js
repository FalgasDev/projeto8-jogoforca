export default function Letras({
	isClicked,
	choseWord,
	setCount,
	count,
	disabledLetters,
	setDisabledLetters,
	isWinner,
	setIsWinner,
}) {

	const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	return (
		<div id="letters">
			{alfabeto.map((a) => (
				<Letter
					letter={a}
					isClicked={isClicked}
					choseWord={choseWord}
					setCount={setCount}
					count={count}
					disabledLetters={disabledLetters}
					setDisabledLetters={setDisabledLetters}
					isWinner={isWinner}
					setIsWinner={setIsWinner}
				/>
			))}
		</div>
	);
}

function Letter({
	letter,
	isClicked,
	choseWord,
	setCount,
	count,
	disabledLetters,
	setDisabledLetters,
	isWinner,
	setIsWinner,
}) {
	function disable(req) {
		const newArray = [...disabledLetters, req];
		setDisabledLetters(newArray);
		if (!choseWord.includes(req)) {
			setCount(count + 1);
		}
		setTimeout(verifyWin, 1);
	}

	function verifyWin() {
		const word = document.querySelector('h1')
			? document.querySelector('h1')
			: '';
		if (word.innerHTML === choseWord.join('')) {
			setIsWinner(true);
		}
	}

	function disableButton() {
		if (count >= 6 || isWinner) {
			return true;
		}

		if (!disabledLetters.includes(letter) && isClicked) {
			return false;
		} else {
			return true;
		}
	}

	return (
		<button
			data-test="letter"
			className={
				disabledLetters.includes(letter) || !isClicked || count >= 6 || isWinner
					? 'selected'
					: ''
			}
			onClick={() => disable(letter)}
			disabled={disableButton()}
		>
			{letter.toUpperCase()}
		</button>
	);
}
