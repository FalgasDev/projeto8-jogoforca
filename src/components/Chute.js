export default function Chute({
	isClicked,
	inputValue,
	setInputValue,
	choseWord,
	setIsWinner,
	count,
	setCount,
	isWinner,
}) {
	
	function verifyInput() {
		if (inputValue === choseWord.join('')) {
			setIsWinner(true);
			setInputValue('');
		} else {
			setCount(6);
			setInputValue('');
		}
	}

	function disableInput() {
		if (count >= 6 || isWinner) {
			return true;
		}

		if (isClicked) {
			return false;
		} else {
			return true;
		}
	}

	return (
		<div id="guess">
			<p>Já sei a palavra!</p>
			<input
				data-test="guess-input"
				onChange={(e) => setInputValue(e.target.value)}
				disabled={disableInput()}
				value={inputValue}
			></input>
			<button
				data-test="guess-button"
				onClick={verifyInput}
				disabled={disableInput()}
			>
				Chutar
			</button>
		</div>
	);
}
