import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Lab extends Component {
  convert = (dtid) => {
    const split = dtid.split('-');
    const converted = [split[0], split[1]];
    return converted.join('-');
  };

  returnChildren = (props) => {
    const { children } = props;
    return children;
  }

  stringInputMethod = (name, dtid, arr) => {
    const { children } = this.props;
    return (
      <label htmlFor={ dtid } data-testid={ dtid }>
        { children }
        <input
          type="text"
          id={ dtid }
          name={ name }
          value={ arr[0] }
          data-testid={ this.convert(dtid) }
          onChange={ (e) => arr[1](e) }
        />
      </label>
    );
  }

  anyInputMethod = (name, dtid, arr) => {
    switch (dtid) {
    case 'storyline-input-label':
      return (
        <label htmlFor={ dtid } data-testid={ dtid }>
          {this.returnChildren(this.props)}
          <textarea
            name={ name }
            id={ dtid }
            value={ arr[0] }
            data-testid={ this.convert(dtid) }
            onChange={ (e) => arr[1](e) }
          />
        </label>
      );
    case 'rating-input-label':
      return (
        <label htmlFor={ dtid } data-testid={ dtid }>
          {this.returnChildren(this.props)}
          <input
            type="number"
            step="0.1"
            id={ dtid }
            name={ name }
            value={ arr[0] }
            data-testid={ this.convert(dtid) }
            onChange={ (e) => arr[1](e) }
          />
        </label>
      );
    case 'genre-input-label':
      return (
        <label htmlFor={ dtid } data-testid={ dtid }>
          {this.returnChildren(this.props)}
          <select
            name={ name }
            id={ dtid }
            onChange={ (e) => arr[1](e) }
            data-testid={ this.convert(dtid) }
            value={ arr[0] }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>);
    default:
      break;
    }
  }

  render() {
    const { name, dtid, arr } = this.props;
    const textInputList = [
      'title-input-label',
      'subtitle-input-label',
      'image-input-label',
    ];
    if (textInputList.includes(dtid)) {
      return this.stringInputMethod(name, dtid, arr);
    }
    return this.anyInputMethod(name, dtid, arr);
  }
}

Lab.propTypes = PropTypes.shape({
  name: PropTypes.string,
  dtid: PropTypes.string,
  arr: PropTypes.instanceOf(Array),
}).isRequired;
