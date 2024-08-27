import React from "react";

export default function MyForm({solution, setIsCorrect, setTurn}) {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      const fullGuess = formJson.myInput;

      if (fullGuess.toLowerCase() === solution){
        console.log("You won!")
        setIsCorrect(true)
          }
      else {
        setIsCorrect(false)
        setTurn(12)
        console.log("Wrong, game over!")
      }
    }
  
    return (
      <form className="answer-form" method="post" onSubmit={handleSubmit}>
        <label>
          Ready to answer? <input name="myInput" type="text"/>
        </label>
        <label>
          <input type="submit"/>
        </label>
      </form>
    );
  }