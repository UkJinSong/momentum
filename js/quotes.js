const quotes = [
    {
        quote: "Shallow men believe in luck, Strong men believe in cause and effect.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It's not that I'm so smart, it's just that I stay with problems longer.",
        author: "Albert Einstein",
    },
    {
        quote: "Only those who dare to fail greatly can ever achieve greatly.",
        author: "John F. Kennedy",
    },
    {
        quote: "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emmerson",
    },
    {
        quote: "What's gone and what's past help, should be past grief.",
        author: "William Shakespeare",
    },
    {
        quote: "Choose a job you love, and you will never have to work a day in your life.",
        author: "Confucius",
    },
    {
        quote: "A wise men will make more opportunities than he finds.",
        author: "Sir Francis Bacon",
    },
    {
        quote: "The best preparation for tomorrow is doing your best today.",
        author: "Jackson Brown.Jr",
    },
    {
        quote: "It's quite fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "Defeat is not the worst of failures. Not to have tired is the true failure.",
        author: "George Edward Woodberry",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
