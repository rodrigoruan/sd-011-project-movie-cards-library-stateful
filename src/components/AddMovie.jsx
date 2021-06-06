// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'enzyme';

class AddMovie extends React.Component {
    constructor(props){
        super(props);
        const { onClick } = this.props;

        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
        }
    }

    render() {
        return(

        );
    }
}

AddMovie.propTypes = {

};

export default AddMovie;