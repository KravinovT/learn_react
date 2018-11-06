import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component {
    
    constructor(props){
        super(props);
        this.onClick=props.onClick;
    }

    render(){
        return (
            <button id="pressMe">+1</button>
        );
    }    
}

Button.propTypes = {
    onClick: PropTypes.func.required
};

export default Button