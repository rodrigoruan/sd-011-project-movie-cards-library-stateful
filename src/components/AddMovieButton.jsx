import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends Component {
    render() {
        const { onClick } = this.props;
        return(
            <button type="button" data-testid="send-button" onClick={ onClick } >
                Adicionar filme
            </button>
        );
    }
}

AddMovieButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default AddMovieButton;