import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import './Map.css';
import { withMap } from '../../contexts/MapContext';

class Map extends Component {
  state = {
    onMarker: false,
  };

  componentDidMount() {
    const { handleMap, list } = this.props;
    try {
      handleMap(list);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps) {
    const { handleMap, list } = this.props;

    if (!_.isEqual(list, prevProps.list)) {
      try {
        handleMap(list);
      } catch (e) {
        console.log(e);
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
