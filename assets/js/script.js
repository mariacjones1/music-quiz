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
        img: '../assets/images/taylor-swift/love-story.jpg',
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
        img: '../assets/images/taylor-swift/look-what-you-made-me-do.jpg',
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
        img: '../assets/images/taylor-swift/anti-hero.jpg',
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
        img: '../assets/images/taylor-swift/teardrops-on-my-guitar.jpg',
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
        img: '../assets/images/taylor-swift/willow.jpg',
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
        img: '../assets/images/taylor-swift/the-man.jpg',
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
            d: 'in the bakcground',
        },
        answer: 'b',
        bonus: 2009,
        title: 'You Belong With Me',
        img: '../assets/images/taylor-swift/you-belong-with-me.jpg',
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
        bonus: c,
        title: 'Cardigan',
        img: '../assets/images/taylor-swift/cardigan.jpg',
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
        img: '../assets/images/taylor-swift/the-story-of-us.jpg',
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
        img: '../assets/images/taylor-swift/i-bet-you-think-about-me.jpg',
      },
];

// Other variables

let currentQuestion = 0;
let mainQuestionHtml = '';
let songInfoHtml = '';
let bonusQuestionHtml = '';
let currentScore;
let bonusScore;
let total;

