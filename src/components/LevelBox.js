import React from 'react';
import styled from 'styled-components';

const levelColor = {
  beginner: '#CD7F32',
  intermediate: '#A8A9AD',
  advanced: '#F6D56D'
}

const Level = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${props => levelColor[props.level]};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;  

  &:hover {
    transition: 0.25s;
    transform: scale(1.25);
  }

  h4 {
    margin: 8px;
  }
`;

const LevelBox = ({ level, data }) => {
  const completed = data.filter(e => e.completed).length;
  return  (
    <div>
      <Level level={level}>
        <h2>{level}</h2>
        <div>
          <h4>Completed</h4>
          <h4>{completed}/{data.length}</h4>
        </div>
      </Level>
    </div>
  )
}

LevelBox.defaultProps = {
  level: 'Beginner',
  completed: 0,
  total: 0
}

export default LevelBox;