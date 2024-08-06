import React from 'react'

export default function Row({guessArray}) {
  return (
    <div className="row">
      {guessArray.map((l, i) => {
        let boxState = "empty"
        if (l) {
          boxState = "filled"
        }
        return <div className={boxState} key={i}>{l}</div>        
      })}
    </div>
  )
}
