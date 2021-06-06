import React from 'react';

// componente Header que é renderizado no App -> nada demais aqui so possui as tags e o class name para passar nos testes

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
