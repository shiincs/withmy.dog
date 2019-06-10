import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <LoginSection>
      <LinkToHome to="/">가치가개</LinkToHome>
      <LoginIntroduce>
        로그인을 하시면
        <br />
        멍멍이 프로필을 만들 수 있어요!
      </LoginIntroduce>
      <Form>
        <InputID type="text" placeholder="이메일 입력" required />
        <InputPW type="password" placeholder="비밀번호 입력" required />
        <InputAutoLogin type="checkbox" id="autoLogin" />
        <LabelAutoLogin htmlFor="autoLogin">자동 로그인</LabelAutoLogin>
        <InputSubmit type="submit" value="로그인" />
      </Form>
    </LoginSection>
  );
};

export default LoginForm;

const LinkToHome = styled(Link)`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-family: 'BMJUA', sans-serif;
  font-size: 20px;
  color: #36c05e;
  text-align: center;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
`;
const LoginSection = styled.section`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginIntroduce = styled.p`
  width: 210px;
  color: #828282;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 30px;
`;
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

const LabelAutoLogin = styled.label`
  display: flex;
  align-items: center;
  width: 210px;
  margin-bottom: 20px;
  font-size: 5px;

  &::before {
    content: '';
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 1px solid #63bc69;
    cursor: pointer;
    margin-right: 5px;
  }

  input[type='checkbox']:checked + &::before {
    content: '\\2713';
    display: flex;
    justify-content: center;
    align-items: center;
    color: #63bc69;
    text-align: center;
    font-size: 20px;
  }
`;
const InputAutoLogin = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
