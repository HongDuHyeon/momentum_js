const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// Math.random에서 뒤에 소수점 없애기
console.log(Math.floor(Math.random() * 10 ) )

// 반올림
console.log(Math.round(1.8))
// 1.1 > 1
// 1.6 > 2

// 올림
console.log(Math.ceil(1.1))
// 1.1 > 2
// 1.8 > 2

// 내림
console.log(Math.floor(1.2))
// 1.1 > 1
// 1.9 > 1
// 1.99999 > 1