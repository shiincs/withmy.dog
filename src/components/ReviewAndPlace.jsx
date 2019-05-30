import React from 'react';
import styled from 'styled-components';

const ReviewAndPlace = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>내 리뷰 / 등록</Title>
      </TitleWrapper>
      <ContentWrapper>
        <DefaultContent>
          반려견과 같이 갈 수 있는
          <br />
          카페, 식당, 술집 정보를 공유해보아요!
        </DefaultContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ReviewAndPlace;

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  height: 60px;
  padding: 20px 30px;
  background-color: #fafafa;
`;

const Title = styled.h2`
  color: #484848;
  font-size: 15px;
`;

const ContentWrapper = styled.div`
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultContent = styled.p`
  color: #737373;
  line-height: 20px;
  text-align: center;
`;
