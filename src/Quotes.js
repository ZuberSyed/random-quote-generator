import React from "react";

export default function Quotes(props) {
  return (
    <div className="quotes">
      <div className="quote">
        <h1>{`"${props.quotes.text}"`}</h1>
        <p>{`--${props.quotes.author}`}</p>
      </div>
      <div className="btnStyle">
        <button className="btn" onClick={props.handleChange}>
          Get quote
        </button>
      </div>
    </div>
  );
}
