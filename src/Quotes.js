import React from "react";

export default function Quotes(props) {
  return (
    <div>
      <h1>{props.quotes.text}</h1>
      <p>{props.quotes.author}</p>
      <button onClick={props.handleChange}>Get quote</button>
    </div>
  );
}
