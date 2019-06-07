import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as DefaultProfileImg } from '../assets/images/profile-big-empty.svg';

const PersonalInfo = () => {
  return (
    <Wrapper>
      <Figure>
        <DefaultProfileImg />
        <FigCaption>
          <DogName>Dogname</DogName>
          <UserId>UserEmail</UserId>
        </FigCaption>
      </Figure>
      <EditButton to="profile/edit">수정하기</EditButton>
    </Wrapper>
  );
};

export default PersonalInfo;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FigCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DogName = styled.strong`
  font-size: 25px;
  font-weight: 700;
  color: #484848;
  margin: 8px 0;
`;

const UserId = styled.span`
  font-size: 15px;
  color: #999;
`;
const EditButton = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 15px;
  color: #999;
`;
