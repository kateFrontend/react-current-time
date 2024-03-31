import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    const currentDate = new Date();
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const currDate = currentDate.toLocaleDateString('en-US', options);
    this.state = {
      date: currDate,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Optionally, you can update the date every tick
    const currentDate = new Date();
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const currDate = currentDate.toLocaleDateString('en-US', options);
    this.setState({
      date: currDate,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}
