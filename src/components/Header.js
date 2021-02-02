import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContent = styled.nav`
  height: 48px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
`;


const SingleLink = styled(NavLink)`
  flex: 1;
  text-align: center;
  background-color: #5b9279;
  line-height: 48px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 18px;
  color: #FAFAFA;
  
  &.active {
    background-color: #8fcb9b;
  }
`;

const Header = () => (
  <HeaderContent>
    <SingleLink exact to='/'>Home</SingleLink>
    <SingleLink to='/beginner'>Beginner</SingleLink>
    <SingleLink to='/intermediate'>Intermediate</SingleLink>
    <SingleLink to='/advanced'>Advanced</SingleLink>
  </HeaderContent>
);


export default Header;
