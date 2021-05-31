// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="inputTitle" data-testid="title-input-label">
            Título
            <input type="text" 
            id="inputTitle"  
            data-testid="title-input" 
            value={this.state.title}
            onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
