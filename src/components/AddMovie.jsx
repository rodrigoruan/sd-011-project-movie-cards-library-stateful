// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import AddMovieButton from './AddMovieButton';

class AddMovie extends React.Component {
    constructor(props){
        super(props);
 
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
        }

        this.clear = this.clear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNewMovie = this.handleNewMovie.bind(this);
    }

    handleChange({target}) {
        const { name, value } = target;
        this.setState({[name]: value});
    }

    
    clear() {
        this.setState({
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
        });
    }

    handleNewMovie() {
        const { onClick } = this.props;
        onClick(this.state);
        this.clear();
    }

    render() {
        const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
        console.log(title, subtitle, storyline, imagePath, rating, genre);
        return(
            <form data-testid="add-movie-form">
                <InputTitle value={ title } handleChange={ this.handleChange }/>
                <InputSubtitle value={ subtitle } handleChange={ this.handleChange } />
                <InputImage value={ imagePath } handleChange={ this.handleChange } />
                <InputStoryline value={ storyline } handleChange={ this.handleChange } />
                <InputRating value={ rating } handleChange={ this.handleChange } />
                <InputGenre value={ genre } handleChange={ this.handleChange } />
                <AddMovieButton onClick={ this.handleNewMovie } />
            </form>
        );
    }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
