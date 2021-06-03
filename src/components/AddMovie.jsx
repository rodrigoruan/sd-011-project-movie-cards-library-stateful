import React from 'react';
import PropTypes from 'prop-types';

// importing aditional files
import MovieTitles from './MovieTitles';
import MovieContent from './MovieContent';

// References
// handleChange: https://reactjs.org/docs/forms.html
// onClick(): https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
// setState(): https://css-tricks.com/understanding-react-setstate/
// this.state: https://www.iamtimsmith.com/blog/this-state-how-to-use-state-in-react
// https://blog.matheuscastiglioni.com.br/mantendo-estados-de-componentes-no-react-com-state/

class AddMovie extends React.Component {
  // super
  constructor(props) {
    super(props);

    // initial info
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    // bindings
    this.handleChange = this.handleChange.bind(this);
    this.evClick = this.evClick.bind(this);
  }

  // functions
  // get name and value of the target and set it
  // Event Target in React: https://stackoverflow.com/questions/37639122/using-event-target-with-react-components
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // event Click function
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
    // declaring initial info
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;

    return (
      // form with Movie's data and Button
      <form data-testid="add-movie-form">
        <MovieTitles
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <MovieContent
          storyLine={ storyLine }
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <center>
          <button
            data-testid="send-button"
            type="submit"
            onClick={ this.evClick }
          >
            Adicionar filme
          </button>
        </center>
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
