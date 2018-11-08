import React, { Component } from 'react';

const DEAFULT_TEXT_VALUE = 'Enter your name ...';
const EXCLUDED_CHARS = ['!', '"', '£', '$']

class CustomForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: DEAFULT_TEXT_VALUE,
            onSubmit: props.onSubmit
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.textValue} onChange={this.onTextChanged} onClick={this.onTextAreaClick} />
                <input type="submit"  />
            </form>
        );
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (this.isValid && this.props.onSubmit) {
            this.state.onSubmit(this.state.textValue)
        }
    }


    onTextChanged = (e) => {
        if (!this.inputIsValid(e.target.value)) {
            return;
        }
        this.setState({
            textValue: e.target.value
        })
    }

    inputIsValid = (text) => {
        let isValid = true;
        if (text === DEAFULT_TEXT_VALUE) {
            return false;
        }
        EXCLUDED_CHARS.forEach(c => {
            if (text.includes(c)) {
                isValid = false;
            }
        }
        )
        return isValid;
    }

    onTextAreaClick = () => {
        if (DEAFULT_TEXT_VALUE === this.state.textValue) {
            this.setState((state) => ({
                textValue: ""
            }))
        }
    }
}

export default CustomForm