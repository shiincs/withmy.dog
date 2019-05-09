import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import ProfileContainer from './containers/ProfileContainer';
import AddPlaceContainer from './containers/AddPlaceContainer';
import MainContainer from './containers/MainContainer';
import { MapProvider } from './contexts/MapContext';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MapProvider>
        <Router>
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/addplace" component={AddPlaceContainer} />
          <Route path="/:category" component={MainContainer} />
          <Route exact path="/" component={MainContainer} />
        </Router>
      </MapProvider>
    </Provider>
  );
}

export default App;
