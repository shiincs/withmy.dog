import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StoreType = () => {
  return (
    <List>
      <Item>
        <TypeLink to="/all">
          <Text>모두</Text>
        </TypeLink>
      </Item>
      <Item>
        <TypeLink to="/restaurant">
          <Text>식당</Text>
        </TypeLink>
      </Item>
      <Item>
        <TypeLink to="/cafe">
          <Text>카페</Text>
        </TypeLink>
      </Item>
      <Item>
        <TypeLink to="/pub">
          <Text>주점</Text>
        </TypeLink>
      </Item>
      <Item>
        <TypeLink to="/etc">
          <Text>기타</Text>
        </TypeLink>
      </Item>
    </List>
  );
};

export default StoreType;

const List = styled.ul`
  display: flex;
  width: 100%;
  height: 32px;
  margin-bottom: 10px;
`;

const Item = styled.li`
  width: 20%;
`;

const TypeLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #8f8f8f;
  font-weight: 600;

  &:hover span {
    border-bottom: 1px solid #36c05e;
  }
`;

const Text = styled.span`
  display: inline-block;
  height: calc(100% - 1px);
  padding: 7px 0;
`;
