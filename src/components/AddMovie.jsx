// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render(){
   const { onclick } = this.props;
   const { title, subtitle } = this.state;

    return(
     <form data-testid="add-movie-form">
       <label data-testid="title-input-label">Título
         <input data-testid="title-input" name="title" type="text" value={ title } onChange={ this.handleChange } />
       </label>

       <label data-testid="subtitle-input-label">Subtítulo
         <input data-testid="subtitle-input" type="text" name="subtitle" value={ subtitle } onChange={ this.handleChange } />
       </label>
     </form>
    );
  }
}

export default AddMovie;