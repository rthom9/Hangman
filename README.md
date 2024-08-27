# Hangman Word Game

## About

This hangman application allows a user to play the traditional hangman word game. In this game, users guess the letters present in an unknown word. An incorrect guess brings the stick figure closer to being “hanged”, with 10 incorrect guesses resulting in an unsuccessful play. Users can input letter guesses using either keyboard inputs or by clicking the displayed keypad. Correct letter guesses are displayed in their respective positions in the word display. The color of the corresponding keypad letter is updated to green or red to reflect a correct or incorrect guess respectively. At any time during the game, a user may guess the complete word.

## Technologies Used:

This project uses the React framework. A local JSON server is used to provide random solution words from a solutions word list.

## How to Install and Play:

```bash
npm install
```

Start a JSON server on PORT: 3001
```bash
json-server ./data/db_words.json --port 3001 
```
Start development server, running project can be viewed at http://localhost:3000
```bash
npm run start
```

## Game Demo:
Users are presented empty letter boxes corresponding to the length of the solution word.
<img src="/demo_screenshots/demo1.png" width="500"/>
<br></br>

If users guess correctly, letter boxes are filled appropriately. Turns remaining is unchanged.
<img src="/demo_screenshots/demo2.png" width="500"/>
<br></br>

If users guess incorrectly, the corresponding keypad letters are turned red, turns are decremented, and the hangman diagram is progressed.
<img src="/demo_screenshots/demo5.png" width="500"/>
<br></br>

If the user guesses all letters or submits an answer before using all turns, they are presented with a congratulations and option to "Replay" with a new random word.
<img src="/demo_screenshots/demo8.png" width="500"/>
<br></br>

If the user uses all turns or submits an incorrect answer, they are presented with the correct answer and the option to "Try Again".
<img src="/demo_screenshots/demo9.png" width="500"/>
