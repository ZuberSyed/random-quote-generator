import React from "react";

export default function Quotes(props) {
  return (
    <div className="quotes">
      <h1>Inspirational Quotes</h1>
      <div className="quote">
        <h2>{`" ${props.quotes.text} "`}</h2>
        <p>{`--${props.quotes.author}`}</p>
        <div className="btnStyle">
          <button className="btn" onClick={props.handleChange}>
            Get quote
          </button>
          <a
            className="btn"
            href={`https://twitter.com/intent/tweet/?text= ${props.quotes.text} -- ${props.quotes.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}
