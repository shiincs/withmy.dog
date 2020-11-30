import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfileContainer from './containers/ProfileContainer';
import AddPlaceContainer from './containers/AddPlaceContainer';
import MainContainer from './containers/MainContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import AddPlaceFormContainer from './containers/AddPlaceFormContainer';
import AddReviewFormContainer from './containers/AddReviewFormContainer';
import { MapProvider } from './contexts/MapContext';

import { fetchRefresh } from './ducks/user';

class App extends React.Component {
  componentDidMount() {
    const { fetchRefresh } = this.props;
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!accessToken || !refreshToken) return;
    fetchRefresh(accessToken, refreshToken);
  }

  render() {
    return (
      <MapProvider>
        <Router>
          <Route path="/place" component={MainContainer} />
          <Route path="/profile/login" component={LoginFormContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route path="/addplace/search" component={AddPlaceContainer} />
          <Route path="/addplace/form" component={AddPlaceFormContainer} />
          <Route path="/review/form" component={AddReviewFormContainer} />
          <Route
            exact
            path="/"
            render={() => <Redirect to="/place?category=all" />}
          />
        </Router>
      </MapProvider>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});
export default connect(
  mapStateToProps,
  { fetchRefresh },
)(App);
