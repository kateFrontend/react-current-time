import { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString("en-CA"),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString("en-CA"),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
