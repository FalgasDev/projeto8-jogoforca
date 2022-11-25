export default function Letras({isClicked, choseWord, setCount, count, disabledLetters, setDisabledLetters}) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div id="words">
      {alfabeto.map(a => (
        <Word word={a} isClicked={isClicked} choseWord={choseWord} setCount={setCount} count={count} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
      ))}
    </div>
  )
}

function Word({word, isClicked, choseWord, setCount, count, disabledLetters, setDisabledLetters}) {
  function disable(req) {
    const newArray = [...disabledLetters, req]
    setDisabledLetters(newArray)
    if (!choseWord.includes(req)) {
      setCount(count + 1)
    }
  }

  function disableButton() {
    if (count >= 6) {
      return true
    }

    if (!disabledLetters.includes(word) && isClicked) {
      return false
    } else {
      return true
    }
  }

  return (
    <button className={disabledLetters.includes(word) || !isClicked || count >= 6 ? 'selected' : ''} onClick={() => disable(word)} disabled={disableButton()}>{word.toUpperCase()}</button>
  )
}