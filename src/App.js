import { useEffect, useState } from "react";
import "./App.css";
function App() {
  let [quote, setQuote] = useState({});
  function generateQuote() {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        console.log(e);
        setQuote({ quote: e.data[0].quoteText, author: e.data[0].quoteAuthor });
      });
  }
  useEffect(() => generateQuote, []);
  return (
    <div className="App">
      <div className="header">
        <div>
          {" "}
          <button className="refresh-btn" onClick={generateQuote}>Generate Quote ↻</button>
        </div>
      </div>
      <div className="quote-content">
        {" "}
        <p>
          {quote.quote} - <span>{quote.author}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
