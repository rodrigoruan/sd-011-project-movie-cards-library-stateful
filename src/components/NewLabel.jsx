import React from 'react';

class NewLabel extends React.Component {
  render() {
    const { dtid,
      lv,
      htmlFor } = this.props;
    return (
      <label data-testid={ dtid } htmlFor={ htmlFor }>
        { lv }
      </label>
    );
  }
}

export default NewLabel;
