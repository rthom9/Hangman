import { useState } from "react";
import { useEffect } from "react";
import Hangman from "./components/Hangman";

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random() * json.length)]
      console.log(randomSolution)
      setSolution(randomSolution.word_phrase)
    })
  }, [setSolution])

  
  return (
    <div className="App">
      <h1>Hangman</h1>
      {solution && <Hangman solution={solution} />}
    </div>
  );
}

export default App
