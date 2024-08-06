import React, {useEffect, useState} from 'react'

export default function Keypad({usedKeys, handleOnClick}) {
    const [letters, setLetters] = useState(null)
    const [currentGuess, setCurrentGuess] = useState("")

    useEffect(() => {
        fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(json => {
            setLetters(json)
        })
    }, [])
  
    return (
    <div className="keypad">
        {letters && letters.map((letter) => {
            const color = usedKeys[letter.key]
            return (
                <div onClick={handleOnClick} key={letter.key} className={color}>{letter.key}</div>
            )
        })}
    </div>
  )
}
