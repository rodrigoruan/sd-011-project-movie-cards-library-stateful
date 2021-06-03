// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class AddMovie extends Component {
//   constructor() {
//     super();
//     this.state = {
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     };
//     this.handleFunction = this.handleFunction.bind(this);
//   }

//   handleForm() {
//     this.setState({
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action'
//     });
//   }

//   render() {
//     return (
//       <form data-testid="add-movie-form">
//         <label data-testid="title-input-label">
//           Título
//           <input
//             type="text"
//             value={ this.handleForms }
//             onChange={ onSearchTextChange }
//             data-testid="title-input"
//           />
//         </label>
//         <label data-testid="checkbox-input-label">
//           Mostrar somente favoritos
//           <input
//             type="checkbox"
//             checked={ bookmarkedOnly }
//             onChange={ onBookmarkedChange }
//             data-testid="checkbox-input"
//           />
//         </label>
//         <label data-testid="select-input-label">
//           Filtrar por gênero
//           <select
//             value={ selectedGenre }
//             onChange={ onSelectedGenreChange }
//             data-testid="select-input"
//           >
//             <option value="" data-testid="select-option">Todos</option>
//             <option value="action" data-testid="select-option">Ação</option>
//             <option value="comedy" data-testid="select-option">Comédia</option>
//             <option value="thriller" data-testid="select-option">Suspense</option>
//           </select>
//         </label>
//       </form>
//     );
//   }
// }

// AddMovie.propTypes = {
//   OnClick: PropTypes.func.isRequired,
// };

// export default AddMovie;
