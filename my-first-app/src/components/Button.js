import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClickHandler: props.buttonClickHandler,
            incrementValue: props.incrementValue
        }
    }

    onButtonClick = (e) => {
        this.state.buttonClickHandler(e, this.state.incrementValue)
    }

    render() {
        return (
            <button id="pressMe" onClick={this.onButtonClick}>+{this.props.incrementValue}</button>
        );
    }
}

Button.propTypes = {
    buttonClickHandler: PropTypes.func.required,
    incrementValue: PropTypes.number.required
};

export default Button