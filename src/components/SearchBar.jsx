// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.inputText = this.inputText.bind(this);
  }

  inputText = () => {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <Form.Group>
        <Form.Label data-testid="text-input-label">Inclui o texto: </Form.Label>
        <Form.Control
          data-testid="text-input"
          size="lg"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </Form.Group>
    );
  };

  render() {
    const { bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <Form data-testid="search-bar-form" className="col">
        {this.inputText()}
        <Form.Group as={ Row }>
          <Form.Check
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            className="ml-3"
            label=""
          />
          <Form.Label data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </Form.Label>
        </Form.Group>
        {/* INPUT SELECT OPTIONS */}
        <Form.Group className="genderMovieInput">
          <Form.Label data-testid="select-input-label">Filtrar por gênero: </Form.Label>
          <Form.Control
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            as="select"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
