import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import ProfileContainer from './containers/ProfileContainer';
import AddPlaceContainer from './containers/AddPlaceContainer';
import MainContainer from './containers/MainContainer';
import { MapProvider } from './contexts/MapContext';
import store from './store';
import IntroContainer from './containers/IntroContainer';

function App() {
  return (
    <Provider store={store}>
      <MapProvider>
        <Router>
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/addplace" component={AddPlaceContainer} />
          <Route path="/map" component={MainContainer} />
          {localStorage.getItem('noMoreIntro') ? (
            <Route
              exact
              path="/"
              render={() => <Redirect to="/map?category=all" />}
            />
          ) : (
            <Route exact path="/" component={IntroContainer} />
          )}
        </Router>
      </MapProvider>
    </Provider>
  );
}

export default App;
