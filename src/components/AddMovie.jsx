import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'açao',
        };
    };
    render() {
        const { onClick } = this.props;
        return (
            <form data-testid="add-movie-form">
                <label data-testid="title-input-label">
                Título
                <input
                data-testid="title-input"
                />
                </label>
                <label data-testid="subtitle-input-label">
                Subtítulo
                <input
                data-testid="subtitle-input"
                />
                </label>
                <label data-testid="image-input-label">
                Imagem
                <input
                data-testid="image-input"
                />
                </label>
                <label data-testid="storyline-input-label">
                Sinopse
                <textarea
                data-testid="storyline-input"
                />
                </label>
                <label data-testid="rating-input-label">
                Avaliação
                <input
                data-testid="rating-input"
                name="rating"
                />
                </label>
                <label data-testid="genre-input-label">
                Gênero
                <select
                data-testid="genre-input">
                <option value="action" data-testid="genre-option">Ação</option>
                <option value="comedy" data-testid="genre-option">Comédia</option>
                <option value="thriller" data-testid="genre-option">Suspense</option>
                </select>
                </label>
            </form>
        )
    }
}

export default AddMovie;