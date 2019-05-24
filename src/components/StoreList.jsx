import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../assets/images/map_icon.svg';
import footPrint from '../assets/images/footprint_off.svg';
import writeReview from '../assets/images/review_write.svg';

const StoreList = props => {
  const { list, isListOpen, handleList } = props;

  return (
    <StoreInfo isListOpen={isListOpen}>
      <List>
        {list.map(item => {
          return (
            <Item key={item.id}>
              <figure>
                <ItemImage
                  src="https://seoul-p-studio.bunjang.net/product/75620694_1_1522899581_w640.jpg"
                  alt="dog"
                  className="dogImage"
                />
                <figcaption>
                  <Dl>
                    <dt>
                      <DtLink href={item.url} target="_blank">
                        {item.title}
                      </DtLink>
                    </dt>
                    <Dd>{item.address}</Dd>
                  </Dl>
                </figcaption>
              </figure>
              <ButtonList>
                <ButtonItem>
                  <img src={footPrint} alt="footprint" />
                  104
                </ButtonItem>
                <ButtonItem>
                  <img src={writeReview} alt="writereview" />
                  리뷰쓰기
                </ButtonItem>
              </ButtonList>
            </Item>
          );
        })}
      </List>
      <MapOpenBtn onClick={() => handleList()}>
        <MapIcon />
      </MapOpenBtn>
    </StoreInfo>
  );
};

export default StoreList;

const StoreInfo = styled.div`
  width: 100%;
  height: calc(100vh - 98px);
  position: fixed;
  left: 0;
  bottom: ${props => (props.isListOpen ? 0 : '-100vh')};
  z-index: 300;
  background-color: #fff;
  transition: bottom 0.3s;
`;
const List = styled.ul`
  width: 100%;
  height: calc(100% - 75px);
  overflow-y: auto;
  background-color: #fff;
`;

const MapOpenBtn = styled.button`
  width: 55px;
  height: 55px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  right: 15px;
  cursor: pointer;
`;

const MapIcon = styled(Icon)`
  fill: #01a462;
`;

const Item = styled.li`
  position: relative;
  margin: 15px 15px;
`;
const ItemImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 108px;
  height: 76px;
  object-fit: cover;
`;

const Dl = styled.dl`
  max-width: 200px;
`;
const DtLink = styled.a`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Dd = styled.dd`
  font-size: 14px;
  color: #7a7a7a;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ButtonList = styled.ul`
  display: flex;
  margin-top: 55px;
  border: 1px solid #efefef;
  border-radius: 8px;
`;

const ButtonItem = styled.li`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-right: 1px solid #efefef;
  }
`;
