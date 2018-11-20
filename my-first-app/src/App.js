import React, { Component } from 'react';
import Button from './components/Button.js';
import Display from './components/Display.js';
import CustomForm from './components/CustomForm.js';
import CustomSelector from './components/CustomSelector.js';

const BUTTONS_INCREMENT_VALUES = [1, 10, -20]
const USER_TYPES = ['Admin', 'Normal']

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 10,
      buttonsIncrementValues: buildIncrementValues(),
      name: '',
      userType: USER_TYPES[1],
      userCreationMessage: ''
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
        <Display valueToDisplay={this.state.userCreationMessage} />
        <div>
          User type: <CustomSelector options={USER_TYPES} selectedOption={this.state.userType} onSelectionChangeHandler={this.onUserTypeChange} />
        </div>
      </div>
    );
  }

  performIncrement = (e, incrementValue) => {
    this.setState(state => ({ counter: state.counter + incrementValue }))
  }

  saveName = (name) => {
    console.log("Saved name: " + name)
    let userCreationMessage = "Created " + name + " as " + this.state.userType + " user"
    this.setState(() => ({
      name: name,
      userCreationMessage: userCreationMessage
    }))
  }

  onUserTypeChange = (userType) => {
    this.setState({
      userType: userType
    })
  }
}


function buildIncrementValues() {
  var shortid = require('short-id');
  return BUTTONS_INCREMENT_VALUES.map((v) => ({ id: shortid.generate(), value: v }))
}

export default App;
