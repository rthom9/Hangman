import React from 'react'
import Row from './Row'

export default function Grid({currentGuess, guesses, turn, solution, guessArray}) {
  return (
    <div>
      {guessArray.map((g, i) => {
        return <Row key={i}/>        
      })}
    </div>
  )
}
