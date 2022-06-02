
// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// PSUEDOCODE:
    // Define variables: 
    // create a function for a timer to start once the button to begin is clicked
    // Set of Questions:
    // Create a function which lets user know if anser is correct or incorrect when an answer is inputted
        // if question is right then add a point to score
        // if question is wrong, create a function to remove 10 sec from timer
        // have it repeat with each question
    // Have some sort of reference to elements... use document.getElementById
    // create a function for when games over and display final score
    // create fucntion for user to add their initals and store highscore in local storage
