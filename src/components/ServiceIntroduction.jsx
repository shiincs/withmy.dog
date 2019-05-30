import React from 'react';
import styled from 'styled-components';

const ServiceIntroduction = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>서비스 소개</Title>
      </TitleWrapper>
      <ContentWrapper>
        <DefaultContent>
          여기는
          <br />
          서비스 소개
        </DefaultContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ServiceIntroduction;

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
