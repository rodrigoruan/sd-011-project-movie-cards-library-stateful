// implement AddMovie component here
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <Form data-testid="search-bar-form" className="col">
        <Form.Group>
          {/* SEARCH INPUT TEXT */}
          <Form.Label data-testid="text-input-label">Inclui o texto: </Form.Label>
          <Form.Control
            data-testid="text-input"
            size="lg"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          ></Form.Control>

          {/* CHECKBOX FAVORITOS */}
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Check
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            className="ml-3"
            label=""
          />
          <Form.Label data-testid="checkbox-input-label">Mostrar somente favoritos </Form.Label>
        </Form.Group>

        {/* INPUT SELECT OPTIONS */}
        <Form.Group className="genderMovieInput">
          <Form.Label data-testid="select-input-label">Filtrar por gênero: </Form.Label>
          <Form.Control
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            checked={bookmarkedOnly}
            onChange={onSelectedGenreChange}
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
