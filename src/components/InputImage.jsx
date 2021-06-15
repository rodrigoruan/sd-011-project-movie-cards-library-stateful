import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input type="text" data-testid="image-input"
                value={ value } onChange= { handleChange }    
            />
        </label> 
        );
    }
}

InputImage.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default InputImage;