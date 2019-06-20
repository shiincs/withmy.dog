import React, { Component } from 'react';
import queryString from 'query-string';

import AddReviewForm from '../components/AddReviewForm';
import AddReviewDone from '../components/AddReviewDone';

export default class AddReviewFormContainer extends Component {
  state = {
    dogType: [],
    existType: [],
    accessType: '',
    contactType: '',
    textInfo: '',
    textCount: 0,
    fileList: [],
    addReviewDone: false,
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
    if (e.target.value.length <= 300) {
      this.setState({
        textInfo: e.target.value,
        textCount: e.target.value.length,
      });
    } else {
      this.setState({
        textInfo: e.target.value.slice(0, 299),
        textCount: 300,
      });
    }
  };

  handleFileInput = e => {
    // 합성 이벤트 풀링 방지를 위한 처리
    e.persist();
    const list = e.target.files;
    this.setState(prevState => ({
      fileList: [...prevState.fileList, ...list],
    }));
  };

  handleFileRemove = idx => {
    this.setState(prevState => ({
      fileList: [...prevState.fileList.filter((file, index) => index !== idx)],
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      addReviewDone: true,
    });
  };

  render() {
    const { addReviewDone } = this.state;
    const { location } = this.props;
    const qs = queryString.parse(location.search);
    return (
      <>
        {addReviewDone ? (
          <AddReviewDone />
        ) : (
          <AddReviewForm
            {...this.state}
            qs={qs}
            handleSelectInput={this.handleSelectInput}
            handleCheckInput={this.handleCheckInput}
            handleTextInput={this.handleTextInput}
            handleFileInput={this.handleFileInput}
            handleFileRemove={this.handleFileRemove}
            handleSubmit={this.handleSubmit}
          />
        )}
      </>
    );
  }
}
