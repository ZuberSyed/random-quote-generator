import React from "react";
import Quotes from "./Quotes";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.handleChange();
  }
  handleChange() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const arr = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: arr
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Quotes quotes={this.state.quote} handleChange={this.handleChange} />
      </div>
    );
  }
}
