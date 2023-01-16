// Declare variables
// Questions
const generalQuestions = [
    {
        question: `
        <p>Do you ever feel</p>
        <p>Like a ______________</p>
        <p>Drifting through the wind</p>
        <p>Wanting to start again?</p>
        `,
        options: {
            a: `<p>plastic bag</p>`,
            b: `<p>ball of string</p>`,
            c: `<p>paper bag</p>`,
            d: `<p>sad person</p>`,
        },
        answer: 'a',
        bonus: 2010,
        title: 'Firework',
        artist: 'Katy Perry',
        img: '../assets/images/general/katy-perry.jpg',
        link: 'https://www.youtube.com/watch?v=QGJuMBdaqIw&ab_channel=KatyPerryVEVO',
    },

    {
        question: `
        <p>If I go there will be trouble,</p>
        <p>If I stay it will be ______________</p>
        `,
        options: {
            a: 'fun',
            b: 'treble',
            c: 'double',
            d: 'more so',
        },
        answer: 'c',
        bonus: 1982,
        title: 'Should I Stay or Should I go?',
        artist: 'The Clash',
        img: '../assets/images/general/the-clash.jpg',
        link: 'https://www.youtube.com/watch?v=xMaE6toi4mk&ab_channel=theclashVEVO',
    },

    {
        question: `
        <p>But you'll come back each time you leave</p>
        <p>'Cause, darling, I'm a nightmare dressed like a ______________</p>
        `,
        options: {
            a: 'good dream',
            b: 'daydream',
            c: 'good time',
            d: 'angel',
        },
        answer: 'b',
        bonus: 2014,
        title: 'Blank Space',
        artist: 'Taylor Swift',
        img: '../assets/images/general/taylor-swift.jpg',
        link: 'https://www.youtube.com/watch?v=e-ORhEE9VVg&ab_channel=TaylorSwiftVEVO',
    },

    {
      question: `
      <p>But now I'm stronger than yesterday,</p>
      <p>Now it's nothing but my way</p>
      <p>My ______________ ain't killing me no more</p>
      `,
      options: {
          a: 'loneliness',
          b: 'sadness',
          c: 'misery',
          d: 'unhappiness',
      },
      answer: 'a',
      bonus: 2000,
      title: 'Stronger',
      artist: 'Britney Spears',
      img: '../assets/images/general/britney-spears.jpg',
      link: 'https://www.youtube.com/watch?v=AJWtLf4-WWs&ab_channel=BritneySpearsVEVO',
  },

  {
    question: `
    <p>I'm all out of faith, this is how I feel</p>
    <p>I'm cold and I am shamed</p>
    <p>Lying ______________ on the floor</p>
    `,
    options: {
        a: 'lonely',
        b: 'curled up',
        c: 'unclothed',
        d: 'naked',
    },
    answer: 'd',
    bonus: 1997,
    title: 'Torn',
    artist: 'Natalie Imbruglia',
    img: '../assets/images/general/natalie-imbruglia.jpg',
    link: 'https://www.youtube.com/watch?v=VV1XWJN3nJo&ab_channel=natalieimbrugliaVEVO',
},

{
  question: `
  <p>So no one told you life was gonna be this way</p>
  <p>Your job's a joke, you're ______________</p>
  <p>Your love life's DOA.</p>
  `,
  options: {
      a: 'stoked',
      b: 'broke',
      c: 'weird',
      d: 'poor',
  },
  answer: 'b',
  bonus: 1995,
  title: 'I\'ll Be There For You',
  artist: 'The Rembrandts',
  img: '../assets/images/general/the-rembrandts.jpg',
  link: 'https://www.youtube.com/watch?v=CXnEgbDcITo&ab_channel=TheRembrandtsVevo',
},

{
  question: `
  <p>Welcome to the Hotel California</p>
  <p>Such a lovely place</p>
  <p>Such a lovely ______________</p>
  `,
  options: {
      a: 'case',
      b: 'brace',
      c: 'ace',
      d: 'face',
  },
  answer: 'd',
  bonus: 1976,
  title: 'Hotel California',
  artist: 'The Eagles',
  img: './assets/images/general/the-eagles.jpg',
  link: 'https://www.youtube.com/watch?v=09839DpTctU&ab_channel=Eagles',
},

{
  question: `
  <p>Well, good for you, you look happy and ______________</p>
  <p>Not me, if you ever cared to ask</p>
  `,
  options: {
      a: 'healthy',
      b: 'wealthy',
      c: 'smiley',
      d: 'easy',
  },
  answer: 'a',
  bonus: 2021,
  title: 'good 4 u',
  artist: 'Olivia Rodrigo',
  img: '../assets/images/general/olivia-rodrigo.jpg',
  link: 'https://www.youtube.com/watch?v=gNi_6U5Pm_o&ab_channel=OliviaRodrigoVEVO',
},

{
  question: `
  <p>Waterloo</p>
  <p>I was defeated, you won the ______________</p>
  `,
  options: {
      a: 'battle',
      b: 'game',
      c: 'war',
      d: 'day',
  },
  answer: 'c',
  bonus: 1974,
  title: 'Waterloo',
  artist: 'ABBA',
  img: '../assets/images/general/abba.jpg',
  link: 'https://www.youtube.com/watch?v=Sj_9CiNkkn4&ab_channel=AbbaVEVO',
},

{
  question: `
  <p>Oh, I wanna dance with somebody</p>
  <p>I wanna feel the ______________ with somebody</p>
  `,
  options: {
      a: 'heat',
      b: 'beat',
      c: 'music',
      d: 'moves',
  },
  answer: 'a',
  bonus: 1987,
  title: 'I Wanna Dance With Somebody',
  artist: 'Whitney Houston',
  img: '../assets/images/general/whitney-houston.jpg',
  link: 'https://www.youtube.com/watch?v=eH3giaIzONA&ab_channel=whitneyhoustonVEVO',
},
];

const taylorSwiftQuestions = [
    {
        question: `
        <p>Romeo take me somewhere we can be ______________</p>
        <p>I'll be waiting, all there's left to do is run</p>
        `,
        options: {
            a: 'alone',
            b: 'together',
            c: 'as one',
            d: 'forever',
        },
        answer: 'a',
        bonus: 2008,
        title: 'Love Story',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/love-story.jpg',
        link: 'https://www.youtube.com/watch?v=8xg3vE8Ie_E&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>I got a list of names, and yours is in red, underlined</p>
        <p>I check it once, then I check it ______________, oh!</p>
        `,
        options: {
            a: 'once more',
            b: 'again',
            c: 'twice',
            d: 'five times',
        },
        answer: 'c',
        bonus: 2017,
        title: 'Look What You Made Me Do',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/look-what-you-made-me-do.jpg',
        link: 'https://www.youtube.com/watch?v=3tmd-ClpJxA&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>I'll stare directly at the sun but never in the mirror</p>
        <p>It must be ______________ always rooting for the anti-hero</p>
        `,
        options: {
            a: 'fun',
            b: 'draining',
            c: 'exciting',
            d: 'exhausting',
        },
        answer: 'd',
        bonus: 2022,
        title: 'Anti-Hero',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/anti-hero.jpg',
        link: 'https://www.youtube.com/watch?v=b1kbLwvqugk&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>He's the reason for the teardrops on my guitar</p>
        <p>The only thing that keeps me wishing on a ______________</p>
        `,
        options: {
            a: 'shooting star',
            b: 'falling star',
            c: 'wishing star',
            d: 'shining star',
        },
        answer: 'c',
        bonus: 2007,
        title: 'Teardrops On My Guitar',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/teardrops-on-my-guitar.jpg',
        link: 'https://www.youtube.com/watch?v=xKCek6_dB0M&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>The more that you say</p>
        <p>The less I know</p>
        <p>Wherever you stray</p>
        <p>I ______________</p>
        `,
        options: {
            a: 'follow',
            b: 'go with you',
            c: 'stray with you',
            d: 'watch you go',
        },
        answer: 'a',
        bonus: 2020,
        title: 'willow',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/willow.jpg',
        link: 'https://www.youtube.com/watch?v=RsEZmictANA&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>I'm so sick of running as fast as I can</p>
        <p>Wondering if I'd get there ______________</p>
        <p>If I was a man</p>
        `,
        options: {
            a: 'better',
            b: 'easier',
            c: 'faster',
            d: 'quicker',
        },
        answer: 'd',
        bonus: 2020,
        title: 'The Man',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/the-man.jpg',
        link: 'https://www.youtube.com/watch?v=AqAJLh9wuZ0&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>But she wears short skirts</p>
        <p>I wear T-shirts</p>
        <p>She's Cheer Captain, and I'm ______________</p>
        `,
        options: {
            a: 'just a nerd',
            b: 'on the bleachers',
            c: 'uncoordinated',
            d: 'in the background',
        },
        answer: 'b',
        bonus: 2009,
        title: 'You Belong With Me',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/you-belong-with-me.jpg',
        link: 'https://www.youtube.com/watch?v=VuNIsY6JdUw&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>But I knew you</p>
        <p>Dancin' in your ______________</p>
        <p>Drunk under a streetlight</p>
        `,
        options: {
            a: 'blue jeans',
            b: 'hoodie',
            c: 'Levi\'s',
            d: 'Nikes',
        },
        answer: 'c',
        bonus: 2020,
        title: 'cardigan',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/cardigan.jpg',
        link: 'https://www.youtube.com/watch?v=K-a8s8OLBSE&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>Oh, a simple complication</p>
        <p>Miscommunications lead to ______________</p>
        `,
        options: {
            a: 'fall out',
            b: 'break-ups',
            c: 'endings',
            d: 'fighting',
        },
        answer: 'a',
        bonus: 2011,
        title: 'The Story of Us',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/the-story-of-us.jpg',
        link: 'https://www.youtube.com/watch?v=nN6VR92V70M&ab_channel=TaylorSwiftVEVO',
      },

      {
        question: `
        <p>Does it make you feel sad</p>
        <p>That the love that you're lookin' for</p>
        <p>Is the love that you ______________</p>
        `,
        options: {
            a: 'lost',
            b: 'had',
            c: 'threw away',
            d: 'discarded',
        },
        answer: 'b',
        bonus: 2021,
        title: 'I Bet You Think About Me',
        artist: 'Taylor Swift',
        img: '../assets/images/taylor-swift/i-bet-you-think-about-me.jpg',
        link: 'https://www.youtube.com/watch?v=5UMCrq-bBCg&ab_channel=TaylorSwiftVEVO',
      },
];

// Create questions and content
let currentQuestion = 0;
let quizQuestions = [];
let mainQuestionHtml = '';
let songInfoHtml = '';
let bonusQuestionHtml = '';
let submitButton = '';

// Scores
let currentScore = parseInt(document.getElementById("correct-answers").innerText);
let bonusScore = parseInt(document.getElementById("bonus-points").innerText);
let totalScore;

// Correct and incorrect answer pop-ups
let popUp = document.getElementById('answer-pop-up');

// User
let currentUser = '';

// Wait for DOM to finish loading before running the quiz
// Get category selection buttons on homepage and add event listeners

let categories = document.getElementsByClassName("category");

document.addEventListener("DOMContentLoaded", function() {
    for (let category of categories) {
        category.addEventListener("click", function() {
            if (this.id === "general") {
                quizQuestions = generalQuestions;
                shuffleQuestions();
                runQuiz();
            } else if (this.id === "taylor-swift") {
                quizQuestions = taylorSwiftQuestions;
                shuffleQuestions();
                runQuiz();
            }
        })
    }
})

function runQuiz() {
  updateMainQuestionHtml(currentQuestion);
  document.getElementById('next-button').addEventListener("click", function() {
    if (this.textContent === "NEXT QUESTION") {
      popUp.style.display = 'none';
      nextQuestion();
    } else if (this.textContent === "SUBMIT") {
      checkAnswer();
    } else if (this.textContent === "BONUS QUESTION") {
      popUp.style.display = 'none';
      bonusQuestion();
    } else if (this.textContent === "SUBMIT BONUS") {
      checkBonusAnswer();
    } else if (this.textContent === "FINISH QUIZ") {
      popUp.style.display = 'none';
      completeQuiz();
    } 
  })
}

/**
 * Main question HTML template, provides new question
 * and additional song information
 */
function updateMainQuestionHtml() {
  mainQuestionHtml = `
  <h2>Question ${[currentQuestion+1]}</h2>
  ${quizQuestions[currentQuestion].question}
  <div class="answers">
    <div>
      <input type="radio" name="multiple-choice" class="multiple-choice" id="a">
      <label for="a">${quizQuestions[currentQuestion].options.a}</label>
    </div>
    <div>
      <input type="radio" name="multiple-choice" class="multiple-choice" id="b">
      <label for="b">${quizQuestions[currentQuestion].options.b}</label>
    </div>
    <div>
      <input type="radio" name="multiple-choice" class="multiple-choice" id="c">
      <label for="c">${quizQuestions[currentQuestion].options.c}</label>
    </div>
    <div>
      <input type="radio" name="multiple-choice" class="multiple-choice" id="d">
      <label for="d">${quizQuestions[currentQuestion].options.d}</label>
    </div>
  </div>
  `;

  songInfoHtml = `
  <div>
    <h4>Song:</h4>
    <h3><em>${quizQuestions[currentQuestion].title}</em></h3>
    <h4>by</h4>
    <h3>${quizQuestions[currentQuestion].artist}</h3>
  </div>
  <div>
    <img src="${quizQuestions[currentQuestion].img}" alt="Picture of ${quizQuestions[currentQuestion].artist}">
    </div>
    `;
  
  submitButton = `
  <button id="next-button">SUBMIT</button>
  `

  document.getElementById('question').innerHTML = mainQuestionHtml;
  document.getElementById('extra').innerHTML = songInfoHtml;
  document.getElementById('category-selection').innerHTML = submitButton;
}

/**
 * Shuffles the questions so they appear in a random order
 * each time the user plays (Fisher–Yates shuffle algorithm)
 */
function shuffleQuestions() {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
}

/**
 * Shows the next question, called when the user starts the quiz by
 * choosing a category or after the user clicks on a 'Next Question'
 * button
 */
function nextQuestion() {
  currentQuestion++;
  runQuiz();
}

/**
 * Checks selected answer against correct answer in
 * questions array and directs user to either the bonus
 * question (if correct) or the next question (if incorrect)
 */
function checkAnswer() {
  let userAnswer = document.querySelector('input[name="multiple-choice"]:checked').id;
  let correctAnswer = quizQuestions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    popUp.innerHTML = `
      <h2>CORRECT!</h2>
      <p>Click below to go to the bonus question</p>
      ` 
    popUp.style.backgroundColor = '#B6D7A8';
    popUp.style.display = 'block';
    incrementMainScore();
    document.getElementById("next-button").innerHTML = 'BONUS QUESTION';
  } else if (userAnswer !== correctAnswer) {
    popUp.innerHTML = `
      <h2>Incorrect! :(</h2>
      <p>Correct answer: ${document.getElementById(correctAnswer).nextElementSibling.textContent}</p>
      <a href=${quizQuestions[currentQuestion].link} target="_blank" aria-label="Play the music video on YouTube (opens in a new tab)">Play song (opens in a new tab)</a>
      <p>Click below to go to the next question</p>
      `
    popUp.style.backgroundColor = '#EA9999'    
     popUp.style.display = 'block';
    if (currentQuestion < 9) {
      document.getElementById('next-button').innerHTML = 'NEXT QUESTION';
    } else {
      document.getElementById('next-button').innerHTML = 'FINISH QUIZ';
    }  
  }
}

function bonusQuestion() {
  bonusQuestionHtml = `
  <h2>BONUS:</h2>
  <p>What year was the single released?</p>
  <input type="number" id="bonus" name="year" min="1970" max="2022">
`;

  document.getElementById('question').innerHTML = bonusQuestionHtml;
  document.getElementById('next-button').innerHTML = 'SUBMIT BONUS';
}

function checkBonusAnswer() {
  let userBonusAnswer = parseInt(document.getElementById('bonus').value);
  let correctBonusAnswer = quizQuestions[currentQuestion].bonus;

  if (userBonusAnswer === correctBonusAnswer) {
    popUp.innerHTML = `
      <h2>CORRECT!</h2>
      <a href=${quizQuestions[currentQuestion].link} target="_blank" aria-label="Play the music video on YouTube (opens in a new tab)">Play song (opens in a new tab)</a>
      <p>Click below to go to the next question</p>
      `  
    popUp.style.display = 'block';
    incrementBonusScore();
    if (currentQuestion < 9) {
      document.getElementById('next-button').innerHTML = 'NEXT QUESTION';
    } else {
      document.getElementById('next-button').innerHTML = 'FINISH QUIZ';
    }
  } else {
    popUp.innerHTML = `
      <h2>Incorrect! :(</h2>
      <p>Correct answer: ${correctBonusAnswer}</p>
      <a href=${quizQuestions[currentQuestion].link} target="_blank" aria-label="Play the music video on YouTube (opens in a new tab)">Play song (opens in a new tab)</a>
      <p>Click below to go to the next question</p>
      `
    popUp.style.backgroundColor = '#EA9999'    
     popUp.style.display = 'block';
    if (currentQuestion < 9) {
      document.getElementById('next-button').innerHTML = 'NEXT QUESTION';
    } else {
      document.getElementById('next-button').innerHTML = 'FINISH QUIZ';
  }
}}

function incrementMainScore() {
  document.getElementById("correct-answers").innerText = ++currentScore;
  updateTotalScore();
}

function incrementBonusScore() {
  document.getElementById("bonus-points").innerText = ++bonusScore;
  updateTotalScore();
}

function updateTotalScore() {
  totalScore = currentScore + bonusScore;
  document.getElementById('total').innerText = totalScore;
}

function completeQuiz() {
  let finalScoreHtml = `
  <h2>Congratulations! You have completed the quiz</h2>
  <p>Correct answers: ${currentScore}</p>
  <p>Bonus points: ${bonusScore}</p>
  <p>Total: ${totalScore}</p>
  `

  let playAgainHtml = `
  <p>Play again?</p>
  <button id="general" class="category"><img src="assets/images/home/general-music-quiz.jpg" alt="General Music Quiz"></button>
  <button id="taylor-swift" class="category"><img src="assets/images/home/taylor-swift-music-quiz.jpg" alt="Taylor Swift Music Quiz"></button>
  `

  document.getElementById('question').innerHTML = finalScoreHtml;
  document.getElementById('category-selection').innerHTML = playAgainHtml;

  if (localStorage.getItem('currentUser') === false) {
    document.getElementById('extra').innerHTML = `
    <div>
      <h3>Create an account to save your high score:</h3>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
      <button id="register">Register</button>
    </div>
    `
    document.getElementById("register").addEventListener("click", function() {
      createUser();
    })
  } else {
    document.getElementById('extra').innerHTML = '';
    updateHighScore();
  }
  

  for (let category of categories) {
    category.addEventListener("click", function() {
        if (this.id === "general") {
            quizQuestions = generalQuestions;
            shuffleQuestions();
            currentQuestion = 0;
            resetScore();
            runQuiz();
        } else if (this.id === "taylor-swift") {
            quizQuestions = taylorSwiftQuestions;
            shuffleQuestions();
            currentQuestion = 0;
            resetScore();
            runQuiz();
        }
    })
}
}

function resetScore() {
  currentScore = 0;
  bonusScore = 0;
  totalScore = 0;

  document.getElementById('correct-answers').innerHTML = currentScore;
  document.getElementById('bonus-points').innerHTML = bonusScore;
  document.getElementById('total').innerHTML = totalScore;
}

let highScore;

function createUser() {
    let currentUser = document.getElementById('username').value;
    window.localStorage.setItem("currentUser", currentUser);
    window.localStorage.setItem("highScore", totalScore);
    updateHighScore();  
}

function updateHighScore() {
  if (highScore > totalScore) {
    window.localStorage.setItem("highScore", totalScore);
  }
  showHighScore();
}

function showHighScore() {
  document.getElementById("user-sign-in").innerHTML = `<p>${localStorage.getItem('currentUser')}: ${localStorage.getItem('highScore')}</p>`
}