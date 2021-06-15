import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label htmlFor="subtitle" data-testid="storyline-input-label">
            Storyline
            <input type="text" data-testid="storyline-input" name="storyline"
                value={ value } onChange= { handleChange }    
            />
        </label> 
        );
    }
}

InputStoryline.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
