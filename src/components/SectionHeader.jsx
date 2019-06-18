import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Close } from '../assets/images/close.svg';

const SectionHeader = ({ children }) => {
  return (
    <Wrapper>
      <LinkWrapper to="/">
        <CloseImage />
      </LinkWrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default SectionHeader;

const Wrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
`;

const LinkWrapper = styled(Link)`
  height: 13px;
`;
const CloseImage = styled(Close)`
  width: 13px;
  height: 13px;
  margin-right: 15px;
`;

const Title = styled.span`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #333;
`;
