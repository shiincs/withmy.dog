import React, { Component } from 'react';
import queryString from 'query-string';

import AddPlaceForm from '../components/AddPlaceForm';

export default class AddPlaceFormContainer extends Component {
  state = {
    placeType: '',
    dogType: [],
    existType: [],
    accessType: '',
    contactType: '',
    textInfo: '',
  };

  handleSelectInput = (name, type) => {
    this.setState({
      [name]: type,
    });
  };

  handleCheckInput = (name, type) => {
    const prevState = [...this.state[name]];
    let newState = null;
    if (prevState.some(item => item === type)) {
      newState = prevState.filter(item => item !== type);
    } else {
      newState = [...prevState, type];
    }
    this.setState({
      [name]: newState,
    });
  };

  handleTextInput = e => {
    this.setState({
      textInfo: e.target.value,
    });
  };

  render() {
    const { location } = this.props;
    const qs = queryString.parse(location.search);
    return (
      <AddPlaceForm
        qs={qs}
        handleSelectInput={this.handleSelectInput}
        handleCheckInput={this.handleCheckInput}
        handleTextInput={this.handleTextInput}
        {...this.state}
      />
    );
  }
}
