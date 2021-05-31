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

	// addMovieFunction(event) {
	// 	const { id } = event.target;
	// 	this.setState(()=> {
	// 		return {[id]: event.target.value};
	// 	});
	// }

  render() {
		return (
			<form data-testid="add-movie-form">
				<label data-testid="title-input-label" for="title">Título</label>
				<input type="text" data-testid="title-input" onChange={ this.addMovieFunction } id="title"></input>
				<label data-testid="subtitle-input-label" for="subtitle">Subtítulo</label>
				<input type="text" data-testid="subtitle-input" id="subtitle" onChange={ this.addMovieFunction }></input>

			</form>
		)
	}
}

export default AddMovie;
