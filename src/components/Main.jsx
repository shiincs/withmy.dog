import React from 'react';

import Header from './Header';
import StoreType from './StoreType';
import MapContainer from '../containers/MapContainer';
import ListOpenBtn from './ListOpenBtn';
import StoreListContainer from '../containers/StoreListContainer';

const Main = props => {
  return (
    <>
      <Header />
      <StoreType />
      <MapContainer />
      <ListOpenBtn {...props} />
      <StoreListContainer {...props} />
    </>
  );
};

export default Main;
