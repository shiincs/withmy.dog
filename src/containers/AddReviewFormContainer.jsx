import React, { Component } from 'react';
import queryString from 'query-string';

import AddReviewForm from '../components/AddReviewForm';

export default class AddReviewFormContainer extends Component {
  state = {
    dogType: [],
    existType: [],
    accessType: '',
    contactType: '',
    textInfo: '',
    fileList: [],
  };

  handleSelectInput = (name, type) => {
    this.setState({
      [name]: type,
    });
  };

  handleCheckInput = (name, type) => {
    const { dogType, existType } = this.state;
    let prevState;
    if (name === 'dogType') {
      prevState = [...dogType];
    } else if (name === 'existType') {
      prevState = [...existType];
    }
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

  handleFileInput = e => {
    // 합성 이벤트 풀링 방지를 위한 처리
    e.persist();
    const list = e.target.files;
    this.setState(prevState => ({
      fileList: [...prevState.fileList, ...list],
    }));
  };

  render() {
    const { location } = this.props;
    const qs = queryString.parse(location.search);
    return (
      <AddReviewForm
        {...this.state}
        qs={qs}
        handleSelectInput={this.handleSelectInput}
        handleCheckInput={this.handleCheckInput}
        handleTextInput={this.handleTextInput}
        handleFileInput={this.handleFileInput}
      />
    );
  }
}
