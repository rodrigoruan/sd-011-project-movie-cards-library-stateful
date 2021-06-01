import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { ...props } = this.props;
    return <form data-testid="search-bar-form" />;
  }
}
