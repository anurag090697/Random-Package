/** @format */

import jokes from "./Jokes.json" assert { type: "json" };
import quotes from "./Quotes.json" assert { type: "json" };

function laughIt() {
  let tm = jokes[Math.floor(Math.random() * 15)];
  let jk = tm.question + "\n" + tm.answer;
  //   console.log(jk);
  return jk;
}

function quoteIt() {
  let tm = quotes[Math.floor(Math.random() * quotes.length)];
  let qt = tm.quote;
  console.log(qt);
  return qt;
}
// laughIt();
// quoteIt();

export { laughIt, quoteIt };
