import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ListViewBtn } from '../assets/images/list-view.svg';

const ListOpenBtn = props => {
  const { handleList } = props;
  return (
    <Button onClick={() => handleList()}>
      <ListOpen />
      <ButtonTitle>목록</ButtonTitle>
      <ListCount />
    </Button>
  );
};

export default ListOpenBtn;

const Button = styled.button`
  position: absolute;
  bottom: 12px;
  left: 12px;
  border-radius: 2px;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background-color: #fff;
  cursor: pointer;
`;

const ListOpen = styled(ListViewBtn)`
  width: 24px;
  height: 24px;
`;

const ButtonTitle = styled.span`
  color: #333;
  font-weight: 600;
`;

const ListCount = styled.span`
  color: #01a462;
  font-weight: 600;
  margin-left: 2px;
`;
