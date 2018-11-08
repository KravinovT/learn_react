import React, { Component } from 'react';
import Button from './components/Button.js';
import Display from './components/Display.js';
import CustomForm from './components/CustomForm.js';

const BUTTONS_INCREMENT_VALUES = [1, 10, -20]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 10,
      buttonsIncrementValues: buildIncrementValues()
    }
  }

  render() {

    let buttons = this.state.buttonsIncrementValues.map((item) =>
      (<Button key={item.id} buttonClickHandler={this.performIncrement} incrementValue={item.value}></Button>))

    return (
      <div id="mainDiv">
        {buttons}
        <Display valueToDisplay={this.state.counter}></Display>
        <CustomForm key="myForm" onSubmit={this.saveName} ></CustomForm>
      </div>
    );
  }

  performIncrement = (e, incrementValue) => {
    this.setState(state => ({ counter: state.counter + incrementValue }))
    console.log("button pressed!")
  }

  saveName = (name) => {
    console.log("Saved name: " + name)
  }
}


function buildIncrementValues() {
  var shortid = require('short-id');
  return BUTTONS_INCREMENT_VALUES.map((v) => ({ id: shortid.generate(), value: v }))
}

export default App;
