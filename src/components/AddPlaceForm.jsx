import React from 'react';
import styled from 'styled-components';

export default function AddPlaceForm(props) {
  const {
    qs,
    placeType,
    dogType,
    existType,
    accessType,
    contactType,
    textInfo,
    handleSelectInput,
    handleCheckInput,
    handleTextInput,
  } = props;

  return (
    <FormSection>
      <PlaceInfo>
        <PlaceName>{qs.name}</PlaceName>
        <PlaceAddress>{qs.address}</PlaceAddress>
      </PlaceInfo>
      <Form>
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
              checked={placeType === 'cafe'}
              onChange={() => handleSelectInput('placeType', 'cafe')}
            />
            <PlaceLabel htmlFor="cafe">카페</PlaceLabel>
            <Input
              type="radio"
              id="pub"
              checked={placeType === 'pub'}
              onChange={() => handleSelectInput('placeType', 'pub')}
            />
            <PlaceLabel htmlFor="pub">술집</PlaceLabel>
            <Input
              type="radio"
              id="etc"
              checked={placeType === 'etc'}
              onChange={() => handleSelectInput('placeType', 'etc')}
            />
            <PlaceLabel htmlFor="etc">기타</PlaceLabel>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitle>
              가게에 함께 간 강아지는 어떤 아이인가요?
            </QuestionTitle>
            <Input
              type="checkbox"
              id="small"
              checked={dogType.some(type => type === 'small')}
              onChange={() => handleCheckInput('dogType', 'small')}
            />
            <Label htmlFor="small">소형견</Label>
            <Input
              type="checkbox"
              id="big"
              checked={dogType.some(type => type === 'big')}
              onChange={() => handleCheckInput('dogType', 'big')}
            />
            <Label htmlFor="big">대형견</Label>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitle>가게 안에서 강아지가 어떻게 있었나요?</QuestionTitle>
            <Input
              type="checkbox"
              id="offleash"
              checked={existType.some(type => type === 'offleash')}
              onChange={() => handleCheckInput('existType', 'offleash')}
            />
            <Label htmlFor="offleash">오프리쉬</Label>
            <Input
              type="checkbox"
              id="seat"
              checked={existType.some(type => type === 'seat')}
              onChange={() => handleCheckInput('existType', 'seat')}
            />
            <Label htmlFor="seat">좌석</Label>
            <Input
              type="checkbox"
              id="bag"
              checked={existType.some(type => type === 'bag')}
              onChange={() => handleCheckInput('existType', 'bag')}
            />
            <Label htmlFor="bag">가방</Label>
            <Input
              type="checkbox"
              id="cage"
              checked={existType.some(type => type === 'cage')}
              onChange={() => handleCheckInput('existType', 'cage')}
            />
            <Label htmlFor="cage">케이지</Label>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitle>
              가게의 어느 영역까지 강아지가 출입할 수 있었나요?
            </QuestionTitle>
            <Input
              type="radio"
              id="entire"
              checked={accessType === 'entire'}
              onChange={() => handleSelectInput('accessType', 'entire')}
            />
            <Label htmlFor="entire">전체출입</Label>
            <Input
              type="radio"
              id="partial"
              checked={accessType === 'partial'}
              onChange={() => handleSelectInput('accessType', 'partial')}
            />
            <Label htmlFor="partial">부분출입</Label>
            <Input
              type="radio"
              id="unknownAccess"
              checked={accessType === 'unknownAccess'}
              onChange={() => handleSelectInput('accessType', 'unknownAccess')}
            />
            <Label htmlFor="unknownAccess">모르겠어요</Label>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitle>
              강아지와 방문하기 전에 미리 연락해야 하나요?
            </QuestionTitle>
            <Input
              type="radio"
              id="needContact"
              checked={contactType === 'needContact'}
              onChange={() => handleSelectInput('contactType', 'needContact')}
            />
            <Label htmlFor="needContact">방문전 연락 필요</Label>
            <Input
              type="radio"
              id="noContact"
              checked={contactType === 'noContact'}
              onChange={() => handleSelectInput('contactType', 'noContact')}
            />
            <Label htmlFor="noContact">필요없음</Label>
            <Input
              type="radio"
              id="unknownContact"
              checked={contactType === 'unknownContact'}
              onChange={() =>
                handleSelectInput('contactType', 'unknownContact')
              }
            />
            <Label htmlFor="unknownContact">모르겠어요</Label>
          </QuestionWrapper>
          <TextAreaWrapper>
            <TextArea
              id="textInfo"
              placeholder="추가로 공유하고 싶은 내용이 있나요?"
              value={textInfo}
              onChange={e => handleTextInput(e)}
            />
            <WordCount>0 / 300</WordCount>
          </TextAreaWrapper>
          <Submit type="submit" value="등록하기" />
        </fieldset>
      </Form>
    </FormSection>
  );
}

const FormSection = styled.section`
  position: relative;
  padding: 15px;
`;
const PlaceInfo = styled.div`
  padding: 0 0 15px 0;
  border-bottom: 1px solid #e0e4e6;
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
  padding: 20px 0 0 0;
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
const Label = styled.label`
  border: 2px solid #eaeeef;
  color: #878d91;
  padding: 7px 13px;
  border-radius: 25px;
  margin-right: 10px;
  cursor: pointer;

  input[type='radio']:checked + &,
  input[type='checkbox']:checked + & {
    background-color: #353a3c;
    border: 2px solid #353a3c;
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
const TextAreaWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 2px solid #eaeeef;
  border-radius: 10px;
  padding: 15px 10px;
  outline: none;

  &:focus {
    border-color: #01a462;
  }
`;
const WordCount = styled.span`
  color: #878d91;
  font-size: 12px;
`;
const Submit = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #01a462;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
