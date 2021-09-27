import React from "react";
import Quotes from "./Quotes";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: [],
      isloading: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ isloading: true });
    this.handleChange();
  }
  handleChange() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const arr = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: arr,
          isloading: false
        });
      });
  }
  render() {
    if (this.state.isloading) {
      return <div className="loaders"></div>;
    } else {
      return (
        <div className="App">
          <Quotes quotes={this.state.quote} handleChange={this.handleChange} />
        </div>
      );
    }
  }
}
