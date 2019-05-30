import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RegisterFormContainer from '../containers/RegisterFormContainer';
import ProfileHeaderDefault from './ProfileHeaderDefault';
import FootPrint from './FootPrint';
import ReviewAndPlace from './ReviewAndPlace';
import ServiceIntroduction from './ServiceIntroduction';

const Profile = () => {
  return (
    <SectionWrapper>
      <ProfileHeaderDefault />
      <SectionTitle>프로필</SectionTitle>
      <RegisterFormContainer />
      <FootPrint />
      <ReviewAndPlace />
      <ServiceIntroduction />
      <CloseButton to="/">X</CloseButton>
    </SectionWrapper>
  );
};

export default Profile;

const SectionWrapper = styled.section`
  padding-top: 35px;
  position: relative;
`;
const SectionTitle = styled.h1`
  width: 2px;
  height: 2px;
  margin: -1px;
  overflow: hidden;
`;
const CloseButton = styled(Link)`
  width: 25px;
  height: 25px;
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 25px;
  right: 25px;

  &:link,
  &:visited,
  &:active {
    color: #000;
  }
`;
