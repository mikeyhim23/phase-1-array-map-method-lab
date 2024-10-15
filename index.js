const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map(sentence => {
    return sentence.replace(/\b(\w)/g, (match) => match.toUpperCase()) 
      .replace(/\b(StopPropagation|PreventDefault|NaN|API|OO|JSONP)\b/g, (match) => match) 
      .replace(/\b(stopPropagation|preventDefault|nan|api|oo|jsonp)\b/g, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()); 
  });
};

module.exports = titleCased;

console.log(titleCased());

