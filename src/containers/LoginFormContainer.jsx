import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { fetchLogin } from '../ducks/user';

class LoginFormContainer extends Component {
  state = {
    email: '',
    password: '',
    autoLogin: false,
  };

  componentDidMount() {
    const isChecked = JSON.parse(localStorage.getItem('autoLogin')) === 1;
    if (isChecked) {
      this.setState({
        autoLogin: true,
      });
    }
  }

  handleInput = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleLogin = (email, password, e) => {
    e.preventDefault();
    const { fetchLogin } = this.props;
    fetchLogin(email, password);
  };

  handleAutoLogin = e => {
    const { autoLogin } = this.state;
    if (!autoLogin) {
      localStorage.setItem('autoLogin', 1);
      this.setState({
        autoLogin: true,
      });
    } else {
      localStorage.setItem('autoLogin', 0);
      this.setState({
        autoLogin: false,
      });
    }
  };

  render() {
    const { isLogined } = this.props;
    return (
      <>
        {isLogined ? (
          <Redirect push to="/" />
        ) : (
          <LoginForm
            {...this.state}
            handleInput={this.handleInput}
            handleLogin={this.handleLogin}
            handleAutoLogin={this.handleAutoLogin}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLogined: state.user.login,
});
export default connect(
  mapStateToProps,
  { fetchLogin },
)(LoginFormContainer);
