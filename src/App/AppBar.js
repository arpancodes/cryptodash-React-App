import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
  font-size: 30px;
`;

const ControlButtonElem = styled.div`
  text-transform: capitalize;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0 0 2px black;
  ${props => props.active && css`
    box-shadow: inset 2px 2px 2px black;
  `}
`;

const ControlButton = ({ name, active }) => {
  return <ControlButtonElem active={active}>{name}</ControlButtonElem>;
};

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const AppBar = () => {
  return (
    <Bar>
      <Logo>Cryptodash</Logo>
      <div />
      <ControlButton active name="Dashboard" />
      <ControlButton name="Settings" />
    </Bar>
  );
};
export default AppBar;
