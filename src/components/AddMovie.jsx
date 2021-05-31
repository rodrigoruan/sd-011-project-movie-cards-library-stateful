// implement AddMovie component here
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleAction = this.handleAction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    const emptyState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState(emptyState);
    event.preventDefault();
  };

  handleAction = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} data-testid="add-movie-form" className="col">
        <Form.Group>
          <Form.Label data-testid="title-input-label">Título</Form.Label>
          <Form.Control
            name="title"
            onChange={this.handleAction}
            value={this.state.title}
            data-testid="title-input"
            type="text"
            placeholder="ex: A volta dos que não foram"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label data-testid="subtitle-input-label">Subtítulo</Form.Label>
          <Form.Control
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleAction}
            data-testid="subtitle-input"
            type="text"
            placeholder="ex: O desenrolar dos enrolado"
          />
        </Form.Group>{' '}
        <Form.Group>
          <Form.Label data-testid="image-input-label">Imagem</Form.Label>
          <Form.Control
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleAction}
            data-testid="image-input"
            type="text"
            placeholder="ex: https://image.jpg"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label data-testid="storyline-input-label">Sinopse</Form.Label>
          <Form.Control
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleAction}
            data-testid="storyline-input"
            as="textarea"
            type="text"
          />
        </Form.Group>{' '}
        <Form.Group>
          <Form.Label data-testid="rating-input-label">Avaliação</Form.Label>
          <Form.Control
            name="rating"
            value={this.state.rating}
            onChange={this.handleAction}
            data-testid="rating-input"
            className="movieRating"
            step="0.1"
            type="number"
            min="0"
            max="5"
          />
        </Form.Group>
        <Form.Group className="genderMovieInput">
          <Form.Label data-testid="genre-input-label">Gênero</Form.Label>
          <Form.Control
            name="genre"
            value={this.state.genre}
            onChange={this.handleAction}
            data-testid="genre-input"
            as="select"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Button data-testid="send-button" type="submit" onClick={this.handleSubmit}>
            Adicionar filme
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
