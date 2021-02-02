import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import seedData from '../utils/seedLocalStorage';
import ChallengeCard from './ChallengeCard';
import Checkbox from './Checkbox';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';
import info from '../images/info.svg';
import star from '../images/star.svg';

const Wrapper = styled.div`
  margin: 16px 32px 0;
`;

const InfoHeader = styled.div`
  display: flex;
  height: 32px;
  padding: 4px 0;
  margin: 8px 32px 0;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    a {
      color: black;
    }
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 8px;
`

function ChallengePage({ level }) {

  const [hiddeCompleted, setHideCompleted] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [filter, setFilter] = useState('');

  const fetch = useCallback(() => {
    const data = seedData();
    const dataToShow = data[level].filter(({ completed }) => !hiddeCompleted || completed === false);
    const filteredDataToShow = dataToShow.filter(({ title }) => title.toLowerCase().includes(filter));
    setCardsData(filteredDataToShow)
  }, [hiddeCompleted, filter, level]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  const resetData = () => {
    localStorage.removeItem('challengeData');
    seedData();
    fetch();
  }

  return (
    <Wrapper>
      <InfoHeader>
        <div>
          <Input value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} />
          <Checkbox checked={hiddeCompleted} onChange={setHideCompleted} label='Hide Completed' />
        </div>
        <div>
          <StyledImg src={info} /><span>Are user stories</span>
          <StyledImg src={star} /><span>Are user bonus items</span>
        </div>
        <div>
          <Button onClick={resetData}>Delete Saved Progress</Button>
          <Link to="/about">About</Link>
        </div>
      </InfoHeader>
      <ListWrapper>
        {cardsData.map(challenge => <ChallengeCard {...challenge} key={challenge.title} level={level} />)}
      </ListWrapper>
    </Wrapper>
  )
}

export default ChallengePage
