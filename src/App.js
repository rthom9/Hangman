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

/* 

data we need to track:
  -- current guess:
    -- string 'apple'
  -- submitted words
  -- number of turns
    - integer to max of 11
  -- keypad letters
    -- array of letter objects [{key: "a", color: "red"}, {}, {}]

game process:
  -- entering letter guesses:
    -- user enters a letter & letter guess line is filled with that letter
    -- when a user hits delete it deletes the letter guess to allow for alternative guess without submission
    -- when a user hits enter it submits the letter
      -- if that letter has already been used in a prev guess (it's red) then the guess is not submitted
  -- checking submitted letter:
    -- letter is checked to see if it matches to the solution
    -- letter is assigned a color based on it's inclusion in the solution
      -- if letter is in solution, letter is green
      -- if letter not in solution, letter is grey
    -- the letter guess is added to solution line in correct position.
    -- the keypad letters are updated (colors)
    -- the guess line is cleared for the next guess
  -- ending the game:
    -- when the guessed letters form the solution word
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'

*/