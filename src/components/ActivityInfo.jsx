import React from 'react';

import styled from 'styled-components';

const ActivityInfo = () => {
  return (
    <Wrapper>
      <strong>
        <LevelInfo>Level0.</LevelInfo>
        <UserName>UserName</UserName>
      </strong>
      <ActivityTitle>
        발도장<Count>11</Count>
      </ActivityTitle>
      <ActivityTitle>
        가게리뷰<Count>11</Count>
      </ActivityTitle>
      <ActivityTitle>
        가게등록<Count>11</Count>
      </ActivityTitle>
    </Wrapper>
  );
};

export default ActivityInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto 0;
`;

const LevelInfo = styled.span`
  font-size: 15px;
  color: #01a462;
  margin-right: 5px;
`;
const UserName = styled.span`
  font-size: 15px;
  color: #737373;
`;
const ActivityTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #484848;
`;
const Count = styled.span``;
