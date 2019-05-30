import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DefaultProfileImg } from '../assets/images/profile-big-empty.svg';

const ProfileHeaderDefault = () => {
  return (
    <Wrapper>
      <DefaultProfileImg />
      <DefaultText>
        멍멍이 이름으로
        <br />
        프로필을 만들어 보세요!
      </DefaultText>
    </Wrapper>
  );
};

export default ProfileHeaderDefault;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const DefaultText = styled.p`
  margin-top: 20px;
  width: 200px;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
`;
