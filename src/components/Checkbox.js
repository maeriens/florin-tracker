import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

const checkedStyles = css`
  background: #2E86DE;
  border-color: #2E86DE;
  color: #fff;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox', id: 'hideCompleted' })`
  appearance: none;
  border: 1px solid grey;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  height: 20px;
  width: 20px;
  position: relative;
  outline: none;

  &::before {
    border-style: solid;
    border-color: white;
    border-width: 0 2px 2px 0;
    content: "";
    left: 20%;
    opacity: ${props => props.checked ? 1 : 0};
    position: absolute;
    top: 45%;
    transform: rotate(45deg) translate(-50%, -50%);
    height: 10px;
    width: 5px;
  }

  ${props => props.checked && checkedStyles};

`;

const StyledLabel = styled.label.attrs({ for: 'hideCompleted' })`
  cursor: pointer;
  padding-left: 4px;
  user-select: none;
  z-index: -1;
`;

const Checkbox = ({ checked, onChange, label }) => (
  <Wrapper>
    <StyledCheckbox checked={checked} onClick={() => onChange(!checked)} />
    <StyledLabel>{label}</StyledLabel>
  </Wrapper>
);

export default Checkbox;
