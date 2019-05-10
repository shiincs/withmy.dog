import React from 'react';
import styled from 'styled-components';

import { ReactComponent as SearchIcon } from '../assets/images/search.svg';
import SelectBtn from '../assets/images/arrow-forward.svg';

const AddPlace = props => {
  const { inputValue, handleChange, handleSubmit } = props;
  return (
    <Section>
      <Title>독플 공유하기</Title>
      <Description>
        멋진 가게를 발견하셨나요? <br />내 이웃 강아지들에게 알려주세요
      </Description>
      <form onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <Legend>장소 검색</Legend>
          <InputWrapper>
            <Input
              type="search"
              placeholder="가게 이름 검색"
              value={inputValue}
              onChange={e => handleChange(e)}
            />
            <SearchBtn type="button" onClick={e => handleSubmit(e)}>
              <SearchIcon />
            </SearchBtn>
          </InputWrapper>
        </fieldset>
      </form>
      <ResultList className="placeSearchList" />
      <PaginationList className="paginationList" />
    </Section>
  );
};

export default AddPlace;

const Section = styled.section`
  width: 100%;
  padding: 20px 15px;
`;

const Title = styled.h2`
  width: 100%;
  height: 35px;
  background-color: #fff;
  padding: 0;
  color: #333;
  font-size: 16px;
  border-bottom: 1px solid #f7f7f7;
  text-align: center;
`;

const Description = styled.p`
  margin: 0 auto;
  text-align: center;
  line-height: 20px;
  margin: 28px 0;
  color: #7a7a7a;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const Legend = styled.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
`;

const Input = styled.input`
  width: 272px;
  height: 48px;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 15px;
`;

const SearchBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #01a462;
  margin-left: 10px;
`;

const ResultList = styled.ul`
  width: 100%;

  & li {
    position: relative;
    padding: 20px;

    button {
      width: 24px;
      height: 24px;
      background-image: url(${SelectBtn});
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      cursor: pointer;
    }

    dl {
      dt {
        font-size: 18px;
        font-weight: 600;
        color: #222;
        margin-bottom: 5px;
      }

      dd {
        font-size: 14px;
        color: #7a7a7a;
      }
    }
  }
`;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .paginationItem {
    border: 1px solid #f7f7f7;

    .paginationLink {
      display: inline-block;
      padding: 5px 10px;
      color: #01a462;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      &.open {
        background-color: #01a462;
        color: #fff;
      }
    }
  }
`;
