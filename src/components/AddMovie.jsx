// import React, { Component } from 'react';

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
//     this.movieAdd = this.movieAdd.bind(this);
//   }

//   movieAdd({ target }) {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     const { onClick } = this.props;
//     const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
//     return (
//       <div>
//         <form data-testid="add-movie-form">
//           <label htmlFor="control" data-testid="title-input-label">
//             Título
//             <input
//               value={ title }
//               data-testid="title-input"
//               onChange={ this.movieAdd }
//             />

//           </label>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddMovie;
