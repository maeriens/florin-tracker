import React from 'react';
import styled from 'styled-components';
import star from '../images/star.svg';
import info from '../images/info.svg';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Card = styled.div`
  padding: 12px;
  width: 25%;
`;

const CardData = styled.div`
  height: 48px;
  padding: 0 8px;
  background-color: ${props => props.completed ? '#DEB841' : '#E6CCBE'};
  cursor: pointer;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  user-select: none;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #C68C6C;
  }
`;

const InfoContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  width: 14px;
  height: 14px;
`;

function ChallengeCard({ url, title, stories, bonus, level, completed }) {

  const completedStories = stories.filter(e => e.completed).length;
  const completedBonus = bonus.filter(e => e.completed).length;

  return (
    <Card>
      <StyledLink to={`/${level}/${url}`}>
        <CardData completed={completed}>
          <span>{title}</span>
          {completed && <span>done!</span>}
          <InfoContainer>
            <span><StyledImg src={info} /> {completedStories}/{stories.length}</span>
            <span><StyledImg src={star} /> {completedBonus}/{bonus.length}</span>
          </InfoContainer>
        </CardData>
      </StyledLink>
    </Card>
  )
}

export default ChallengeCard
