import React from 'react';

import Header from './Header';
import StoreType from './StoreType';
import MapContainer from '../containers/MapContainer';

const Main = () => {
  return (
    <>
      <Header />
      <StoreType />
      <MapContainer />
    </>
  );
};

export default Main;
