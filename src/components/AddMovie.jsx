import PropTypes from 'prop-types';
import React from 'react';
import Input from './input';
import Textarea from './textarea';
import Select from './select';
import Avaliation from './avaliation';
import Button from './button';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handler = this.handler.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checkbox : target.value;
    this.setState(({
      [name]: value,
    }));
  }

  submit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
    this.reset();
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          handler={ this.handler }
          text="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          value={ title }
          name="title"
        />
        <Input
          handler={ this.handler }
          text="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="subtitle-input"
          value={ subtitle }
          name="subtitle"
        />
        <Input
          handler={ this.handler }
          text="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          value={ imagePath }
          name="imagePath"
        />
        <Textarea handler={ this.handler } value={ storyline } name="storyline" />
        <Avaliation handler={ this.handler } value={ rating } />
        <Select
          handler={ this.handler }
          text="Gênero"
          dataLabel="genre-input-label"
          dataInput="genre-input"
          genre={ genre }
          name="genre"
        />
        <Button submit={ this.submit } />
      </form>
    );
  }
}
export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
