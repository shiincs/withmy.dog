import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileContainer from './containers/ProfileContainer';
import AddPlaceContainer from './containers/AddPlaceContainer';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <Router>
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/addplace" component={AddPlaceContainer} />
      <Route exact path="/" component={MainContainer} />
    </Router>
  );
}

export default App;
