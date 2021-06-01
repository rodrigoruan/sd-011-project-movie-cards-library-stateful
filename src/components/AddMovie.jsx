// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(target.value)
    this.setState({
      [name]:  value
    })
  }

  render() {
    const { onClick } = this.props;

    return(
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input data-testid="title-input" value={this.state.title} name="title" type="text" onChange={this.handleChange} />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input data-testid="subtitle-input" name="subtitle" type="text" value={this.state.subtitle} onChange={this.handleChange
            }/>
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input data-testid="image-input" name="imagePath" type="text" value={this.state.imagePath} onChange={this.handleChange}/>
            </label>
            <label data-testid="storyline-input-label">
              Sinopse
              <input data-testid="storyline-input" type="text-area" name="storyline" value={this.state.storyline} onChange={this.handleChange}/>
              </label>
        </form>
      </div>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}


export default AddMovie;

