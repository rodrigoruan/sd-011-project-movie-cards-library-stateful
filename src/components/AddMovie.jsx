import React from 'react';

class AddMovie extends React.Component {
	constructor() {
		super();
		this.state = {
			subtitle: '',
			title: '',
			imagePath: '',
			storyline: '',
			rating: 0,
			genre: 'action',
		}
		this.addMovieFunction = this.addMovieFunction.bind;
	}

	addMovieFunction(event) {
		this.setState(()=> {
			return {title: event.target.value};
		});
	}

  render() {
		return (
			<form data-testid="add-movie-form">
				<label  data-testid="title-input-label" for="title-input-label">Título</label>
				<input type="text" data-testid="title-input" onChange={this.addMovieFunctio} name="title-input-label"></input>

			</form>
		)
	}
}

export default AddMovie;
