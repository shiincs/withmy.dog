import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StoreListView from '../components/StoreListView';
import {
  getVisibleList,
  getIsFetching,
  getErrorMessage,
  fetchList,
} from '../ducks/list';

class StoreListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props;
    if (category !== prevProps.category) {
      this.fetchData();
    }
  }

  fetchData() {
    const { category, fetchList } = this.props;
    fetchList(category).then(() => console.log('list done!'));
  }

  render() {
    const { list, isListOpen, handleList } = this.props;
    return (
      <StoreListView
        list={list}
        isListOpen={isListOpen}
        handleList={() => handleList()}
      />
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { category },
    },
  },
) => {
  const selectedCategory = category || 'all';
  return {
    list: getVisibleList(state, selectedCategory),
    isFetching: getIsFetching(state, selectedCategory),
    category: selectedCategory,
    getErrorMessage: getErrorMessage(state, selectedCategory),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchList },
  )(StoreListContainer),
);
