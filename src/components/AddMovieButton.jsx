import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends Component {
    render() {
        const { onClick, clear } = this.props;
        return(
            <button data-testid="send-button" onClick={ () =>  { 
                onClick();
                clear();
             } } >
                Adicionar filme
            </button>
        );
    }
}

AddMovieButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
};

export default AddMovieButton;