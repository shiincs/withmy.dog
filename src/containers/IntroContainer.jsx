import React, { Component } from 'react';

import Intro from '../components/Intro';

export default class IntroContainer extends Component {
  state = {
    isSecondOpen: false,
    isThirdOpen: false,
    isFourthOpen: false,
  };

  handleNextArticle(nth) {
    this.setState({
      [nth]: !this.state.nth,
    });
  }

  render() {
    return (
      <Intro
        {...this.state}
        handleNextArticle={nth => this.handleNextArticle(nth)}
      />
    );
  }
}
