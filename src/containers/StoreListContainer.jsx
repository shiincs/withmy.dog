import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

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

const mapStateToProps = (state, { location }) => {
  const category = queryString.parse(location.search).category || 'all';
  return {
    list: getVisibleList(state, category),
    isFetching: getIsFetching(state, category),
    category,
    getErrorMessage: getErrorMessage(state, category),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchList },
  )(StoreListContainer),
);
