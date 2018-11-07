import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component {

    onButtonClick = (e) => {
        this.props.buttonClickHandler(e, this.props.incrementValue)
    }

    getSign = () => this.props.incrementValue > 0 ? '+' : ''

    render() {
        return (
            <button id="pressMe" onClick={this.onButtonClick}>{this.getSign()}{this.props.incrementValue}</button>
        );
    }
}

Button.propTypes = {
    buttonClickHandler: PropTypes.func.required,
    incrementValue: PropTypes.number.required
};

export default Button