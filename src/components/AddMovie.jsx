import React from 'react';
import PropTypes from 'prop-types';

// importing aditional files
import MovieTitles from './MovieTitles';
import MovieContent from './MovieContent';

// References
// handleChange: https://reactjs.org/docs/forms.html
// onClick(): https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
// setState(): https://css-tricks.com/understanding-react-setstate/
// https://blog.matheuscastiglioni.com.br/mantendo-estados-de-componentes-no-react-com-state/

class AddMovie extends React.Component {
  // super
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.evClick = this.evClick.bind(this);
  }

  // functions
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  evClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }));
  }

  // render
  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieTitles
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <MovieContent
          storyLine={ storyLine }
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.evClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

// propTypes
AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

// exports
export default AddMovie;
