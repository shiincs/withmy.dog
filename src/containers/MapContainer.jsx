import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Map from '../components/Map/Map';

import {
  getVisibleList,
  getIsFetching,
  getErrorMessage,
  fetchList,
} from '../ducks/list';

class MapContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.fetchData();
    }
  }

  fetchData() {
    const { category, fetchList } = this.props;
    fetchList(category).then(() => console.log('map done!'));
  }

  render() {
    const { list } = this.props;
    console.log(list);
    return <Map list={list} />;
  }
}

const mapStateToProps = (state, { location }) => {
  const category = queryString.parse(location.search).category || 'all';
  return {
    list: getVisibleList(state, category),
    isFetching: getIsFetching(state, category),
    category,
    errorMessage: getErrorMessage(state, category),
  };
};

// MapContainer = withRouter(
//   connect(
//     mapStateToProps,
//     { fetchList },
//   )(MapContainer),
// );

export default withRouter(
  connect(
    mapStateToProps,
    { fetchList },
  )(MapContainer),
);
