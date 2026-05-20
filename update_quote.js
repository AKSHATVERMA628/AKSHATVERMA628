const fs = require('fs');
const path = require('path');

const quotes = [
  { text: "Clean code always looks like it was written by someone who cares.", author: "Michael Feathers" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "How you characterize feasibility determines your limits.", author: "John Carmack" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "One of my most productive days was throwing away 1,000 lines of code.", author: "Ken Thompson" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Computers are good at following instructions, but not at reading your mind.", author: "Donald Knuth" },
  { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "A user interface is like a joke. If you have to explain it, it’s not that good.", author: "Martin LeBlanc" },
  { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
  { text: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan" },
  { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
  { text: "A primary cause of complexity is that software vendors uncritically adopt hardware paradigms.", author: "Niklaus Wirth" },
  { text: "Writing the first 90% of a project takes 90% of the time. The remaining 10% takes another 90% of the time.", author: "Tom Cargill" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "The only way to go fast, is to go well.", author: "Robert C. Martin" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "Measure progress by lines of code is like measure aircraft building progress by weight.", author: "Bill Gates" },
  { text: "Quality is a product of a conflict between programmers and product managers.", author: "Jerry Weinberg" },
  { text: "There are only two hard things in Computer Science: cache invalidation and naming things.", author: "Phil Karlton" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" }
];

function updateQuote() {
  const date = new Date();
  // Use current day of the month (1-31) to pick a quote (0-indexed)
  const dayIndex = (date.getDate() - 1) % quotes.length;
  const quote = quotes[dayIndex];

  const readmePath = path.join(__dirname, 'README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf8');

  const startMarker = '<!-- START_QUOTE -->';
  const endMarker = '<!-- END_QUOTE -->';

  const newQuoteHtml = `${startMarker}\n<blockquote>\n  <p align="center">\n    <i>"${quote.text}"</i> <br />\n    &mdash; <b>${quote.author}</b>\n  </p>\n</blockquote>\n${endMarker}`;

  // Find start and end positions
  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const updatedContent = readmeContent.substring(0, startIndex) + newQuoteHtml + readmeContent.substring(endIndex + endMarker.length);
    fs.writeFileSync(readmePath, updatedContent, 'utf8');
    console.log(`Successfully updated quote of the day to Day ${dayIndex + 1}: "${quote.text}"`);
  } else {
    console.error('Could not find START_QUOTE or END_QUOTE markers in README.md');
  }
}

updateQuote();
