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
  state = {
    latitude: null,
    longitude: null,
  };

  componentDidMount() {
    try {
      this.getPositionAndData();
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props;
    if (prevProps.category !== category) {
      try {
        this.fetchData();
      } catch (e) {
        console.error(e);
      }
    }
  }

  getPosition = () => {
    new Promise(res =>
      window.navigator.geolocation.getCurrentPosition(res),
    ).then(position => {
      this.setPosition(position.coords.latitude, position.coords.longitude);
    });
  };

  setPosition = (latitude, longitude) => {
    this.setState({
      latitude,
      longitude,
    });
  };

  getPositionAndData = async () => {
    await this.getPosition();
    await this.fetchData();
  };

  fetchData() {
    const { category, fetchList } = this.props;
    fetchList(category).then(() => console.log('map done!'));
  }

  render() {
    const { list } = this.props;
    const { latitude, longitude } = this.state;
    console.log(list, latitude, longitude);
    return (
      <>
        {list.length !== 0 && latitude && longitude ? (
          <Map list={list} position={{ latitude, longitude }} />
        ) : (
          <div>loading...</div>
        )}
      </>
    );
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

export default withRouter(
  connect(
    mapStateToProps,
    { fetchList },
  )(MapContainer),
);
