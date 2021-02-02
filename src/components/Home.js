import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import LevelBox from './LevelBox';
import seedData from '../utils/seedLocalStorage';

const LevelsWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
`;

const BoxLevelsWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
color: inherit;
`;


function Home() {

  const [beginnerData, setBeginnerData] = useState([]);
  const [intermediateData, setIntermediateData] = useState([]);
  const [advancedData, setAdvancedData] = useState([]);

  useEffect(() => {
    const { beginner, intermediate, advanced } = seedData();
    setBeginnerData(beginner);
    setIntermediateData(intermediate);
    setAdvancedData(advanced);
  }, []);

  return (
    <LevelsWrapper>
      <BoxLevelsWrapper>
        <StyledLink to='/beginner'>
          <LevelBox level='beginner' data={beginnerData} />
        </StyledLink>
        <StyledLink to='intermediate'>
          <LevelBox level='intermediate' data={intermediateData} />
        </StyledLink>
        <StyledLink to='advanced'>
          <LevelBox level='advanced' data={advancedData} />
        </StyledLink>
      </BoxLevelsWrapper>
    </LevelsWrapper>
  )
}

export default Home
