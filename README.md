# Let's Get Lyrical! Music Quiz
Let's Get Lyrical! Music Quiz is a quiz website where users fill in the blanks for lyrics of well-known songs by answering mulptiple choice questions and, if they get the question right, they can get an extra point by answering the bonus question asking what year the single came out.

Final website: [https://mariacjones1.github.io/music-quiz/](https://mariacjones1.github.io/music-quiz/)

![Responsive mock-up](/documentation/screenshots/responsive-mock-up.png)

<hr>

## User goals
- To test knowledge of song lyrics by answering quiz questions.
- To be able to do the quiz on any device (desktop, tablet, mobile).
- To be able to see their previous high score.
- To be able to repeat the quiz as many times as desired without having to refresh the page to go back to the start.
- To be able to read the instructions before completing the quiz.
- To see questions in a random order.
- To have the opportunity to score bonus points for each question answered correctly.
- To receive immediate feedback for each question answer.
- To be able to play the relevant song after answering each question.

## Owner goals
- To provide a fun way for users to test their music knowledge.
- To make a music quiz website which can be built upon over time, with new quiz questions and categories.

<hr>

## Features
- Responsive layouts
    - Desktop-, tablet- and mobile-friendly designs (see mock-up above).
- Site logo
    - Uses a different font to the rest of the site so that it stands out, but overall design is kept simple so it's not distracting.
    - Clicking on it will navigate back to the start/refresh the page.
    - Not fixed to prevent it from taking up too much space when user scrolls down on smaller screens.

![Logo](documentation/screenshots/logo.png)

- Quiz instructions
    - Simple instructions telling the user what to expect from the quiz and how to submit their answers.
    - Separated into main quiz instructions and bonus question instructions.

![Instructions](documentation/screenshots/instructions.png)

- Category selection
    - Allows the user to choose a category for which to answer questions.
    - Features text telling the user what the category is over a relevant image.
    - Event listener is used to select the corresponding questions array before running the quiz.
    - New categories can be added by adding a new image button to the HTML, and adding corresponding new question arrays and updating the category selection event listener in the JavaScript.

![Category selection](documentation/screenshots/category-selection.png)

- Multiple choice questions
    - Asks user to fill in the blanks for song lyrics.
    - Questions will be shuffled at the start of the quiz, so they will appear in a random order each time (JavaScript function uses Fisher-Yates shuffle algorithm).
    - Code uses radio buttons so user can only select one but has the choice of changing their selection before submitting their answer.
    - Radio buttons are styled to look like normal buttons as it is aesthetically nicer.
    - Selected buttons will change colour so it is clear which one has been selected. Buttons also change colour when the user hovers over them.

![Multiple choice question](documentation/screenshots/multiple-choice-question.png)

- Extra song information
    - Song title, artist and an image of the artist appear below each question to provide helpful information to the user.
    - The images are taken from the music video as often as possible to keep them relevant.

![Song information](documentation/screenshots/song-details.png)

- Submit buttons
    - Text changes based on quiz stage - 'SUBMIT' to submit answers to the main questions, 'SUBMIT BONUS' to submit answers to the bonus questions, 'NEXT QUESTION' to move onto the next question after seeing answer feedback and 'FINISH QUIZ' after completing the final question.
    - Event listener moves the the next function based on the text inside the button.
    - Allows the user to move through the quiz at their own pace, e.g., if they want to change their mind about a multiple choice question answer before submitting or if they want to stop and listen to a song before moving on to the next question.
    - Button changes colour when user hovers over it (consistent with other buttons on the site).

![Submit button](documentation/screenshots/submit-button.png)
![Submit button when hovered over](documentation/screenshots/submit-button-hover.png)

- Bonus questions
    - User will only see the bonus questions for main questions they answer correctly.
    - Asks user the year the single came out.
    - Features number input going from 1970 - 2022 (can be adjusted if new songs are added that came out before or after these years).
    - User will see an alert if they leave the input blank or try to enter a year outside the accepted range.

![Bonus question](documentation/screenshots/bonus-question.png)

![Bonus question invalid answer alert](documentation/screenshots/invalid-answer-alert.png)

- Correct/incorrect answer pop-ups
    - User will see a pop-up after answering each question, telling them if they answered correctly or incorrectly.
    - Incorrect answer pop-ups will tell the user the correct answer.
    - Correct and incorrect pop-ups after the bonus question, and incorrect pop-ups after the main question, feature a link to watch the song's music video on YouTube which will open in a new tab. Correct answers after the main question do not have this as the user will see it after answering the bonus question.
    - Correct pop-ups have a green background and incorrect pop-ups have a light red background, as these colours are universally known to symbolise correct and incorrect answers.

![Correct answer pop-up - main question](documentation/screenshots/pop-up-correct.png)

![Correct answer pop-up - bonus question](documentation/screenshots/pop-up-correct-bonus.png)

![Incorrect answer pop-up](documentation/screenshots/pop-up-incorrect.png)

- Scores
    - User's current scores appear at the bottom of the screen.
    - Scores are calculated and updated in real-time.
    - Scores are broken down into Correct Answers (to the main questions), Bonus Points (for bonus questions answered correctly), and Total (the sum of Correct Answers and Bonus Points).

![Scores](documentation/screenshots/scores.png)

- High score
    - Users who have taken the quiz before will see their high score in the screen header.
    - High score will update if the user takes the quiz again and scores a higher total.
    - Users who have not taken the quiz before, or who have done so on a different device or using a different browser, will see a high score of 0.

![High score](documentation/screenshots/high-score.png)

- Final scores
    - Upon completing the quiz, the user will see their final scores for correct answers, bonus points and total.
    - This is also when the high score in the header will update if the new total is higher than the previous high score.

![Final scores](documentation/screenshots/final-screen-score.png)

- Play again
    - Also upon completing the quiz, the user will have the opportunity to play again by seeing the same category selection buttons they saw on the first screen, this time accompanied by the text 'Play again?'.
    - This will cause the questions from the selected array to be shuffled again before showing the new Question 1, so even if the user chooses the same category, the questions will appear in a different order.

![Play again](documentation/screenshots/final-screen-play-again.png)

- Custom 404 error page
    - Appears if user tries to access a non-existent page on the site.
    - Features an image from a well-known song relevant to the text (Text: 'Oops! Image from 'Oops!..I Did It Again by Britney Spears) and a link back to the homepage.
    - Styling is consistent with the rest of the site so as not to be too jarring if it appears.

![404 page content](documentation/screenshots/404.png)

- Favicon
    - User experience is enhanced by featuring a favicon relevant to the site (music notes over a CD)

![Favicon](documentation/screenshots/favicon.png)

<hr>

## Wireframes
[Balsamiq](https://balsamiq.com/) was used to create initial wireframes for the project. All page views were initially designed for desktop screens, with one final wireframe designed to show how the layout will be adapted on mobile screens (all screens share the same basic layout). Main changesmade to the finals layouts are:
- The background uses an image of defocused coloured lights, which looks nicer than a plain background (the blue used in the wireframes is used as the fallback background colour if the image doesn't load).
- The high score has been brought in-line with the end of the 'main' section (all content within the grey box) instead of being in the corner of the screen.
- The radio buttons for the multiple choice questions were styled to look like regular buttons.

<details><summary>Click to view wireframes</summary>

### Instructions and category selection
![Instructions](documentation/wireframes/instructions.png)

### Main question
![Main question](documentation/wireframes/main-question.png)

### Correct answer
![Correct answer](documentation/wireframes/correct-answer.png)

### Incorrect answer
![Incorrect answer](documentation/wireframes/incorrect-answer.png)

### Bonus question
![Bonus question](documentation/wireframes/bonus-question.png)

### Correct bonus answer
![Correct bonus answer](documentation/wireframes/correct-answer-bonus.png)

### Incorrect bonus answer
![Incorrect bonus answer](documentation/wireframes/incorrect-answer-bonus.png)

### Final page
![Final page](documentation/wireframes/final-page.png)

### Mobile layout
![Mobile layout](documentation/wireframes/mobile.png)
</details>

<hr>

## Testing
### Bugs found and fixed during development

| Bug | Fix |
| --- | --- |
| Background image does not cover screen, despite background-size property being set to 'cover'. | Set HTML height to 100%, however when tested on smaller devices the background still did not cover the bottom of the screen after scrolling down. Solved by moving the HTML height property to a media query to apply only to screens with width 770px and above. |
| Category selection buttons showed with rounded corners on mobile screen, despite no border radius property being set. This resulted in the corners of the images being cut off. When reappearing on the final page, only one button had this appearance, making them inconsitent. | Solved by setting the same padding to all sides of the category selection buttons. Also added a border so they are consistent with other buttons on the site. |
| Question content did not change when a new question was meant to be shown. | Solved by putting question template literal into a function, to be called each time a new question was needed. |
| No functions running on site preview. | Missing comma in question array flagged in Dev Tools. Issue solved by adding comma to JavaScript file. |
| Bonus answer was accepting empty strings and invalid answers despite min- and max-values being set and having 'required' attribute. | Put bonus question label and answer input inside form element, but this did not solve it as the submit button was not inside the form element. Instead, set conditions in the JavaScript event listener that will only accept the answer if the string is not empty and is greater or equal to than 1970 and less than or equal to 2022, otherwise an alert will show. |