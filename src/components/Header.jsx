import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as AddLogo } from '../assets/images/add.svg';

const Header = () => {
  return (
    <MainHeader>
      <Title>
        <TitleLink to="/">강아지랑 가치가개</TitleLink>
      </Title>
      <nav>
        <List>
          <li>
            <Profile to="/profile">프로필</Profile>
          </li>
          <li>
            <AddPlace to="/addplace/search">
              <AddPlaceLogo />
              등록
            </AddPlace>
          </li>
        </List>
      </nav>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  position: relative;
  width: 100%;
  color: #333;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
`;

const TitleLink = styled(Link)`
  font-size: 18px;
  color: #333;
`;

const List = styled.ul`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
`;

const Profile = styled(Link)`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: #ccc;
  border-radius: 50%;
  text-indent: -9999px;
`;

const AddPlace = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 32px;
  border-radius: 16px;
  background-color: #01a462;
  color: #fff;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  font-weight: 600;
`;

const AddPlaceLogo = styled(AddLogo)`
  width: 24px;
  height: 24px;
`;
