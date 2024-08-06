import React, { useEffect } from 'react'
import useHangman from '../hooks/useHangman'
import Row from './Row'
import AnswerForm from './AnswerForm'
import Keypad from './Keypad'
import Btn from './Btn'
import LetterGuess from './LetterGuess'

export default function Hangman({solution}) {
    const { currentGuess, handleKeyUp, isCorrect, turn, guessArray, usedKeys, handleOnClick, setIsCorrect, setTurn } = useHangman(solution)
    
    const pageRefresh = () => {
      window.location.reload()
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if (isCorrect) {
          window.removeEventListener('keyup', handleKeyUp)
        }

        if (turn > 10) {
          window.removeEventListener('keyup', handleKeyUp)
        }
        //cleanup function, avoids have +++ keyup event listeners each time reloads
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])

    // If user still in game. 
    if (!isCorrect && turn < 11) {
      return (
        <div>
          <br></br>
          <Row guessArray={guessArray}/>
          <br></br>
          <div>Select or Type Your Guess:</div>
          <br></br>
          <LetterGuess currentGuess={currentGuess}/>
          <br></br>
          <div>Turns Remaining: {11 - turn}</div>
          <br></br>
          <AnswerForm solution={solution} setIsCorrect={setIsCorrect} setTurn={setTurn}/>
          <br></br>
          <Keypad usedKeys={usedKeys} handleOnClick={handleOnClick}/>
          <Btn handleOnClick={handleOnClick} label="Enter"/>
          <Btn handleOnClick={handleOnClick} label="Backspace"/>
        </div>
      )
    // If user successfully guessed solution.
    } else if (isCorrect) {
      return (
        <div>
          <br></br>
          <Row guessArray={solution.split("")}/>
          <br></br>
          <div>You did it!</div>
          <br></br>
          <Btn handleOnClick={pageRefresh} label="Replay"/>
        </div> 
      )
    // If user exceeded turns available or guessed solution incorrectly.  
    } else {
      return (
        <div>
        <br></br>
        <Row guessArray={solution.split("")}/>
        <br></br>
        <div>Whoops! Not quite. The answer is: {solution}</div>
        <br></br>
        <Btn handleOnClick={pageRefresh} label="Try Again"/>
      </div> 
      )
    }
}
