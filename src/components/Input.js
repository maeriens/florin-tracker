import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: 'text', id: 'search', placeholder: 'Search',
  value: props.value, onChange: props.onChange
}))`
  border-radius: 4px; 
  margin-right: 16px;
  &:focus {
    outline: none;
  }
`;

export default Input;
