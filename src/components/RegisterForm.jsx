import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterForm = props => {
  const { handleInput, handleRegister, email, password } = props;
  return (
    <>
      <Form onSubmit={e => handleRegister(email, password, e)}>
        <InputID
          type="text"
          placeholder="이메일 입력"
          required
          onChange={e => handleInput('email', e)}
          value={email}
        />
        <InputPW
          type="password"
          placeholder="비밀번호 입력"
          required
          onChange={e => handleInput('password', e)}
          value={password}
        />
        <InputSubmit type="submit" value="계정 생성" />
      </Form>
      <GoToLogin>
        <span>이미 계정이 있으신가요? </span>
        <Link to="/profile/login">로그인</Link>
      </GoToLogin>
    </>
  );
};

export default RegisterForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputID = styled.input`
  width: 210px;
  height: 45px;
  background-color: #f2f2f2;
  border: 1px solid #e0e0e0;
  padding: 12px 17px;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const InputPW = styled.input`
  width: 210px;
  height: 45px;
  background-color: #f2f2f2;
  border: 1px solid #e0e0e0;
  padding: 12px 17px;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const InputSubmit = styled.input`
  width: 210px;
  height: 45px;
  background-color: #63bc69;
  color: #fff;
  padding: 12px 17px;
  font-size: 14px;
  font-weight: 600;
`;

const GoToLogin = styled.div`
  text-align: center;
  color: #828282;
  font-weight: 600;
  margin-top: 5px;

  & > a:link,
  & > a:visited,
  & > a:active {
    color: #63bc69;
  }
`;
