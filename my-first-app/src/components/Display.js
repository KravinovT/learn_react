import React from 'react';
import PropTypes from 'prop-types'

class Display extends React.Component {

    constructor(props) {
        super(props)
        this.state = { valueToDisplay: props.valueToDisplay }
    }

    render() {
        return <div id="displayDiv">{this.props.valueToDisplay}</div>
    }

}

Display.propTypes = {
    valueToDisplay: PropTypes.number.required
}

export default Display