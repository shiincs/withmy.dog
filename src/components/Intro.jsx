import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Intro = props => {
  const { isSecondOpen, isThirdOpen, isFourthOpen, handleNextArticle } = props;
  return (
    <Wrapper>
      <Section>
        <Header>
          <Link to="/map?category=all">X</Link>
          <Link
            to="/map?category=all"
            onClick={() => {
              localStorage.setItem('noMoreIntro', 1);
            }}
          >
            다시 보지 않기
          </Link>
        </Header>
        <Article1>
          페이지1
          <button
            type="button"
            onClick={() => handleNextArticle('isSecondOpen')}
          >
            다음
          </button>
        </Article1>
        <Article2 isSecondOpen={isSecondOpen}>
          페이지2
          <button
            type="button"
            onClick={() => handleNextArticle('isThirdOpen')}
          >
            다음
          </button>
        </Article2>
        <Article3 isThirdOpen={isThirdOpen}>
          페이지3
          <button
            type="button"
            onClick={() => handleNextArticle('isFourthOpen')}
          >
            다음
          </button>
        </Article3>
        <Article4 isFourthOpen={isFourthOpen}>
          페이지4
          <Link to="/map?category=all">시작</Link>
        </Article4>
      </Section>
    </Wrapper>
  );
};

export default Intro;
const Wrapper = styled.div`
  position: relative;
`;
const Section = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
const Header = styled.div`
  background: orange;
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;
const Article1 = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 30px;
  left: 0;
`;
const Article2 = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 30px;
  left: ${props => (props.isSecondOpen ? 0 : '100vw')};
  transition: left 0.3s;
`;
const Article3 = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 30px;
  left: ${props => (props.isThirdOpen ? 0 : '100vw')};
  transition: left 0.3s;
`;
const Article4 = styled.div`
  background-color: green;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 30px;
  left: ${props => (props.isFourthOpen ? 0 : '100vw')};
  transition: left 0.3s;
`;
