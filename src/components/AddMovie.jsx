import React from 'react';

export default class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="title">
            Titulo:
            <input type="text" name="title" id="title"/>
          </label>
        </form>
      </div>
    )
  }
}
