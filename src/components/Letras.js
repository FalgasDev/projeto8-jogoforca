export default function Letras() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div id="words">
      {alfabeto.map(a => (
        <Word word={a}/>
      ))}
    </div>
  )
}

function Word({word}) {
  return (
    <div className="word">
      <button>{word.toUpperCase()}</button>
    </div>
  )
}