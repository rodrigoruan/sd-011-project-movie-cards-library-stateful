import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label htmlFor="title" data-testid="subtitle-input-label">
            Título
            <input type="text" data-testid="subtitle-input"
                value={ value } onChange= { handleChange }    
            />
        </label> 
        );
    }
}

InputSubtitle.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
