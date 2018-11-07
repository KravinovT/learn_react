import React, { Component } from 'react';
import Button from './components/Button.js';
import Display from './components/Display.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { counter: 10 }
  }

  render() {
    return (
      <div id="mainDiv">
        <Button buttonClickHandler={this.onButtonClick} incrementValue={1}></Button>
        <Button buttonClickHandler={this.onButtonClick} incrementValue={10}></Button>
        <Button buttonClickHandler={this.onButtonClick} incrementValue={20}></Button>

        <Display valueToDisplay={this.state.counter}></Display>
      </div>
    );
  }

  onButtonClick = (e, incrementValue) => {
    this.setState(state => ({ counter: state.counter + incrementValue }))
    console.log("button pressed!")
  }
}

export default App;
