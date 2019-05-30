import React from 'react';
import styled from 'styled-components';

const FootPrint = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>발도장</Title>
      </TitleWrapper>
      <ContentWrapper>
        <DefaultContent>
          반려견이랑 같이 간 카페나 식당, 술집에
          <br />
          발도장을 쾅 찍어보세요!
          <br />
          <br />
          발도장이 많을수록
          <br />
          멍멍이와 함께 한 시간이 많다는 뜻이겠죠? ^^
        </DefaultContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FootPrint;

const Wrapper = styled.div`
  margin-top: 30px;
`;

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
