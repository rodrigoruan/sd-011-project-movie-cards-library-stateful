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
            </form>
        )
    }
}

export default AddMovie;