import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import './Map.css';
import { withMap } from '../../contexts/MapContext';

class Map extends Component {
  componentDidMount() {
    const {
      handleMap,
      list,
      position: { latitude, longitude },
    } = this.props;

    try {
      handleMap(list, latitude, longitude);
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevPros) {
    const {
      handleMap,
      list,
      position: { latitude, longitude },
    } = this.props;

    if (!_.isEqual(prevPros.list, list)) {
      try {
        handleMap(list, latitude, longitude);
      } catch (e) {
        console.error(e);
      }
    }
  }

  render() {
    return <MapEl id="mapEl" />;
  }
}

export default withMap(Map);

const MapEl = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 98px);
`;
