import React, { Component } from 'react';
import './index.css';
export default class Lesson3 extends Component {
  state = {
    isLit: true,
    temperature: 22
  };
  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };
  turnOn = () => {
    this.state.isLit
      ? null
      : this.setState({
          isLit: !this.state.isLit
        });
  };
  turnOff = () => {
    this.state.isLit
      ? this.setState({
          isLit: !this.state.isLit
        })
      : null;
  };
  temperatureUp = () => {
    this.setState({
      temperature: this.state.temperature + 1
    });
  };
  temperatureDown = () => {
    this.setState({
      temperature: this.state.temperature - 1
    });
  };
  render() {
    const brightness = this.state.isLit ? 'lit' : 'dark';
    const { isLit, temperature } = this.state;
    return (
      <div className={`room ${brightness}`}>
        the room is {isLit ? 'lit' : 'dark'}
        <br />
        <button onClick={this.flipLight}>flip</button>
        <br />
        <button onClick={this.turnOn}>ON</button>
        <button onClick={this.turnOff}>OFF</button>
        <p>Room temperature: {temperature} Cº</p>
        <br />
        <button onClick={this.temperatureUp}>+</button>
        <button onClick={this.temperatureDown}>-</button>
      </div>
    );
  }
}
