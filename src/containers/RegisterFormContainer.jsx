import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegisterForm from '../components/RegisterForm';
import { fetchRegister } from '../ducks/user';

class RegisterFormContainer extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInput = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleRegister = (email, password, e) => {
    e.preventDefault();
    const { fetchRegister } = this.props;
    fetchRegister(email, password);
  };

  render() {
    const { isRegistered } = this.props;
    return (
      <>
        {isRegistered ? (
          <Redirect to="/" />
        ) : (
          <RegisterForm
            {...this.state}
            handleInput={this.handleInput}
            handleRegister={this.handleRegister}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isRegistered: state.user.register,
});

export default connect(
  mapStateToProps,
  { fetchRegister },
)(RegisterFormContainer);
