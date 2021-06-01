import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="title">
            Titulo:
            <input type="text" name="title" id="title"/>
          </label>
          <label htmlFor="subtitle">
            Sub-titulo:
            <input type="text" name="subtitle" id="subtitle"/>
          </label>
          <label htmlFor="imgSource">
            Image Source:
            <input type="text" name="imgSource" id="imgSource"/>
          </label>
          <label htmlFor="synopsis">
            Synopsis:
            <input type="text" name="synopsis" id="synopsis"/>
          </label>
          <label htmlFor="rate">
            Rate:
            <input type="number" name="rate" id="rate"/>
          </label>
          <label htmlFor="gender">
            Gender:
            <input type="text" name="gender" id="gender"/>
          </label>
        </form>
      </div>
    )
  }
}
