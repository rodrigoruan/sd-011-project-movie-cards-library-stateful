import React from 'react';
import PropTypes from 'prop-types';
/* Requisito 6 */
class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
        };
        this.stateSet = this.stateSet.bind(this);
    }

    stateSet() {
        const { onClick } = this.props;
        onClick();
    }

    render() {
        return (
            <form data-testid="add-movie-form">
                
            </form>
        );
    }
}

AddMovie.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default AddMovie;