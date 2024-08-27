import { useState } from 'react'

const useHangman = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("") // currentGueess is string of letter
    const [guessArray, setGuessArray] = useState([...Array(solution.length)])
    const [history, setHistory] = useState([]) // history is an array
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({}) // {a: gray, b: red, c: green}

    const formatGuess = () => {
        let solutionArray = [...solution]

        for (let i = 0; i < solution.length; i++) {
            if (solutionArray[i] === currentGuess) {
                guessArray[i] = currentGuess
                setGuessArray(guessArray)
            }
        }
        // guessArray will list current correct guesses
        return guessArray
    }

    const addNewGuess = (formatted) => {
        let guessCorrect = false;
        if (formatted.join("") === solution){
            setIsCorrect(true)
            console.log("You won!")
        }

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setUsedKeys((prevKeys) => {
            let solutionArray = [...solution]
            prevKeys[currentGuess] = "red"
            for (let i = 0; i < solution.length; i++) {
                if (solutionArray[i] === currentGuess) {
                    prevKeys[currentGuess] = "green";
                    guessCorrect = true;
                }
            }
            return prevKeys
        })

        setTurn((prevTurn) => {
            if (guessCorrect) {
                return prevTurn
            } else {
                return prevTurn + 1
            }
            
        })

        // Clear previous guess once entered
        setCurrentGuess('')
    }

    const handleKeyUp = ( {key} ) => {
        if (key === "Enter") {
            if (turn > 10) {
                console.log("All guesses used.")
                return
            }
            if (history.includes(currentGuess)) {
                console.log("Letter already used.")
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
        }
        if (key === "Backspace") {
            setCurrentGuess("")
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            setCurrentGuess(key.toLowerCase())
            return
        }

    }

    const handleOnClick = ( event ) => {
        const btn = event.target;
        const key = btn.innerText

        if (key === "Enter") {
            if (turn > 10
            ) {
                console.log("All guesses used.")
                return
            }
            if (history.includes(currentGuess)) {
                console.log("Letter already used.")
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
        }
        if (key === "Backspace") {
            setCurrentGuess("")
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            setCurrentGuess(key)
        }
    }

    return {turn, currentGuess, isCorrect, handleKeyUp, guessArray, usedKeys, handleOnClick, setIsCorrect, setTurn}
}

export default useHangman