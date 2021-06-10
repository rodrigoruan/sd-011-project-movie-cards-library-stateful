import React from 'react';

const initialState = {
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
}

class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = initialState;
        
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    };
    
    handleChange({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value,
        });
    }
    
    handleClick(){
        const { onClick } = this.props;
        onClick(this.state)
        this.setState(initialState);
    }
    
    render() {
        
        return (
            <form data-testid="add-movie-form">
            <label data-testid="title-input-label">
            Título
            <input
            data-testid="title-input"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}/>
            </label>
            <label data-testid="subtitle-input-label">
            Subtítulo
            <input
            data-testid="subtitle-input"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}/>
            </label>
            <label data-testid="image-input-label">
            Imagem
            <input
            data-testid="image-input"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleChange}/>
            </label>
            <label data-testid="storyline-input-label">
            Sinopse
            <textarea
            data-testid="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleChange}/>
            </label>
            <label data-testid="rating-input-label">
            Avaliação
            <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={this.state.rating}
            onChange={this.handleChange}/>
            </label>
            <label data-testid="genre-input-label">
            Gênero
            <select
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.handleChange}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
            </label>
            <button
            data-testid="send-button"
            onClick={this.handleClick}>
            Adicionar filme
            </button>
            </form>
            )
        }
    }
    
    export default AddMovie;