import React, { Component } from 'react';

class CustomSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options,
            selectedOption: props.selectedOption       
        }
    }

    render() {
        let options = this.state.options.map(opt => (opt === this.state.selectedOption) ? <option key={opt} selected value={opt}>{opt}</option> : <option  key={opt} value={opt}>{opt}</option>)

        return (
            <select onChange={this.onChange}>
                {options}
            </select>
        );
    }

    onChange = (event) =>{
        if(this.props.onSelectionChangeHandler){
            this.props.onSelectionChangeHandler(event.target.value);
        }
    } 

}

export default CustomSelector