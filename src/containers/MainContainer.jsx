import React, { Component } from 'react';

import Main from '../components/Main';

export default class MainContainer extends Component {
  state = {
    isListOpen: false,
  };

  handleList() {
    this.setState(prev => ({
      isListOpen: !prev.isListOpen,
    }));
  }

  render() {
    const { isListOpen } = this.state;
    return (
      <Main isListOpen={isListOpen} handleList={() => this.handleList()} />
    );
  }
}
