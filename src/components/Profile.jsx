import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RegisterFormContainer from '../containers/RegisterFormContainer';
import ProfileHeaderDefault from './ProfileHeaderDefault';
import FootPrint from './FootPrint';
import ReviewAndPlace from './ReviewAndPlace';
import ServiceIntroduction from './ServiceIntroduction';
import UserInfoContainer from '../containers/UserInfoContainer';

const Profile = () => {
  return (
    <SectionWrapper>
      <SectionTitle>프로필</SectionTitle>
      {/* Default Header */}
      <ProfileHeaderDefault />
      {/* RegisterForm (not logined) */}
      <RegisterFormContainer />
      {/* UserInfo (when logined) */}
      {/* <UserInfoContainer /> */}
      <FootPrint />
      <ReviewAndPlace />
      <ServiceIntroduction />
      <CloseButton to="/">&#215;</CloseButton>
    </SectionWrapper>
  );
};

export default Profile;

const SectionWrapper = styled.section`
  padding-top: 35px;
  position: relative;
`;
const SectionTitle = styled.h1`
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;
const CloseButton = styled(Link)`
  font-size: 30px;
  text-align: center;
  position: absolute;
  top: 20px;
  right: 25px;

  &:link,
  &:visited,
  &:active {
    color: #000;
  }
`;
