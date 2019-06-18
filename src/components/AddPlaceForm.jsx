import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

export default function AddPlaceForm(props) {
  const { qs, placeType, handleSelectInput, handleSubmit } = props;
  // TODO
  // 1. form input validation 디자인과 결합해서 로직 짜야함
  // 2. 사진 추가하기 버튼 레이아웃 및 file system 연동
  return (
    <>
      <FormSection>
        <SectionHeader>독플 등록</SectionHeader>
        <PlaceInfo>
          <PlaceName>{qs.name}</PlaceName>
          <PlaceAddress>{qs.address}</PlaceAddress>
        </PlaceInfo>
        <Form onSubmit={e => handleSubmit(e)}>
          <fieldset>
            <Legend>가게 등록</Legend>
            <QuestionWrapper>
              <QuestionTitle>가게의 카테고리를 선택해주세요</QuestionTitle>
              <Input
                type="radio"
                id="restaurant"
                name="placeType"
                checked={placeType === 'restaurant'}
                onChange={() => handleSelectInput('placeType', 'restaurant')}
                required
              />
              <PlaceLabel htmlFor="restaurant">식당</PlaceLabel>
              <Input
                type="radio"
                id="cafe"
                name="placeType"
                checked={placeType === 'cafe'}
                onChange={() => handleSelectInput('placeType', 'cafe')}
              />
              <PlaceLabel htmlFor="cafe">카페</PlaceLabel>
              <Input
                type="radio"
                id="pub"
                name="placeType"
                checked={placeType === 'pub'}
                onChange={() => handleSelectInput('placeType', 'pub')}
              />
              <PlaceLabel htmlFor="pub">술집</PlaceLabel>
              <Input
                type="radio"
                id="etc"
                name="placeType"
                checked={placeType === 'etc'}
                onChange={() => handleSelectInput('placeType', 'etc')}
              />
              <PlaceLabel htmlFor="etc">기타</PlaceLabel>
            </QuestionWrapper>
            <Submit type="submit" value="등록하기" />
          </fieldset>
        </Form>
      </FormSection>
    </>
  );
}

const FormSection = styled.section`
  position: relative;
  height: 100vh;
`;
const PlaceInfo = styled.div`
  height: 80px;
  padding: 20px 0;
  margin: 0 15px;
  border-bottom: 1px solid #e0e4e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PlaceName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #292a2b;
  display: block;
  line-height: 20px;
`;
const PlaceAddress = styled.span`
  color: #a9afb2;
  display: block;
  line-height: 20px;
`;
const Form = styled.form`
  padding: 20px 15px 0;
`;
const Legend = styled.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const QuestionWrapper = styled.div`
  margin-bottom: 30px;
`;
const QuestionTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #292a2b;
  margin-bottom: 20px;
`;
const PlaceLabel = styled.label`
  border: 2px solid #eaeeef;
  color: #878d91;
  padding: 7px 13px;
  border-radius: 25px;
  margin-right: 10px;
  cursor: pointer;

  input[type='radio']:checked + & {
    background-color: #01a462;
    border: 2px solid #01a462;
    color: #fff;
  }
`;
const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const Submit = styled.input`
  position: absolute;
  bottom: 15px;
  width: calc(100% - 30px);
  height: 50px;
  border-radius: 25px;
  background-color: #01a462;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
