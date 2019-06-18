import React, { Component } from 'react';
import queryString from 'query-string';

import AddPlaceForm from '../components/AddPlaceForm';
import AddPlaceDone from '../components/AddPlaceDone';

export default class AddPlaceFormContainer extends Component {
  state = {
    placeType: '',
    addPlaceDone: false,
  };

  handleSelectInput = (name, type) => {
    this.setState({
      [name]: type,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      addPlaceDone: true,
    });
  };

  render() {
    const { addPlaceDone } = this.state;
    const { location } = this.props;
    const qs = queryString.parse(location.search);
    return (
      <>
        {addPlaceDone ? (
          <AddPlaceDone qs={qs} />
        ) : (
          <AddPlaceForm
            qs={qs}
            handleSelectInput={this.handleSelectInput}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        )}
      </>
    );
  }
}
