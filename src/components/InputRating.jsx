import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input type="number" data-testid="rating-input" name="rating"
                value={ value } onChange= { handleChange }    
            />
        </label> 
        );
    }
}

InputRating.propTypes = {
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default InputRating;
