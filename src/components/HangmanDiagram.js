import React from 'react'

const HangmanDiagram = ( {turn} ) => {
  return (
    <div className="hangman-diagram">
        {turn > 0 && <div className="gallows-base"/>}
        {turn > 1 && <div className="gallows-pole"/>}
        {turn > 2 && <div className="gallows-top-bar"/>}
        {turn > 3 && <div className="gallows-rope"/>}
        {turn > 4 && <div className="head"/>}
        {turn > 5 && <div className="body"/>}
        {turn > 6 && <div className="left-leg"/>}
        {turn > 7 && <div className="right-leg"/>}
        {turn > 8 && <div className="left-arm"/>}
        {turn > 9 && <div className="right-arm"/>}
    </div>
  )
}

export default HangmanDiagram