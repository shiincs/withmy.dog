import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return (
      <RegisterForm
        {...this.state}
        handleInput={this.handleInput}
        handleRegister={this.handleRegister}
      />
    );
  }
}

const mapStateToProps = state => ({
  payload: state.payload,
});

export default connect(
  mapStateToProps,
  { fetchRegister },
)(RegisterFormContainer);
