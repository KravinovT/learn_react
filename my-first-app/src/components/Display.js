import React from 'react';
import PropTypes from 'prop-types'

class Display extends React.Component {

    render() {
        return <div id="displayDiv">{this.props.valueToDisplay}</div>
    }
}

Display.propTypes = {
    valueToDisplay: PropTypes.number.required
}

export default Display