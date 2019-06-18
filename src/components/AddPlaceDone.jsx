import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';

const AddPlaceDone = props => {
  const { qs } = props;
  console.log(qs);
  return (
    <DoneSection>
      <SectionHeader>독플 등록</SectionHeader>
      <InfoWrapper>
        <ImageWrapper />
        <Title>독플 등록 완료</Title>
        <Event>'처음가게등록' 뱃지 획득</Event>
        <Content>
          독플을 공유해주셔서 고마워요!
          <br />
          이웃 강아지들에게 큰 도움이 될거에요
        </Content>
        <GoToReview to="/">가게 리뷰 작성하기</GoToReview>
        <GoToMain to="/">메인으로 가기</GoToMain>
      </InfoWrapper>
    </DoneSection>
  );
};

export default AddPlaceDone;

const DoneSection = styled.section`
  position: relative;
  height: 100vh;
`;

const InfoWrapper = styled.div`
  height: calc(100vh - 56px);
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 95px;
  height: 95px;
  background: #a9afb2;
  border-radius: 50%;
  margin-top: 15%;
`;

const Title = styled.strong`
  font-size: 20px;
  font-weight: 600;
  color: #292a2b;
  margin-top: 5%;
`;

const Event = styled.p`
  color: #01a462;
  margin-top: 5%;
`;

const Content = styled.p`
  line-height: 20px;
  text-align: center;
  color: #878d91;
  margin-top: 5%;
`;

const GoToReview = styled(Link)`
  position: absolute;
  bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px);
  height: 50px;
  border-radius: 25px;
  background-color: #01a462;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const GoToMain = styled(Link)`
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px);
  height: 50px;
  border-radius: 25px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
