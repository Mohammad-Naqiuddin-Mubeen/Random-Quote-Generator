import { React, useEffect, useState } from "react";
import "./QuoteGenerator.css";
import axios from "axios";

const QuoteGenerator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quote, setQuote] = useState([]);
  const fetchQuote = async () => {
    const api = await axios.get("https://dummyjson.com/quotes?limit=0");
    const { data } = api;
    const { quotes } = data;
    setQuote(quotes);
  };
  useEffect(() => {
    fetchQuote();
  }, []);
// Functions For displaying Quote
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quote.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quote.length - 1 : prevIndex - 1
    );
  };
// Current Displaying Quote
  const currentQuote = quote.length > 0 ? quote[currentIndex] : null;
  return (
    <>
      <div className="mainContainer">
        <div className="desc">
          <h1>Quotes</h1>
          <p>Beautiful & Meaningful Random Quotes</p>
        </div>
        <div className="quoteConatiner">
          {currentQuote && (
            <>
              <h3 className="quote">{currentQuote.quote}</h3>
              <h4 className="author">- {currentQuote.author}</h4>
            </>
          )}
        </div>
        <div className="btn">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default QuoteGenerator;
