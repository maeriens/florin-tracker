import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Checkbox from './Checkbox';
import info from '../images/info.svg';
import star from '../images/star.svg';

const TitleWrapper = styled.div`
  display: flex;
`;

const headerBeforeStyle = css`
  &::before {
    content: '- ';
    color: black;
  }
`;

const CompletedHeader = styled.h1`
  margin-left: 8px;
  color: red;
  ${props => props.completed && headerBeforeStyle}
`;

const Wrapper = styled.div`
  margin: 16px 32px 0;
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TaskText = styled.pre`
  padding-left: 4px;
  text-decoration: ${props => props.checked ? ' line-through' : 'none'};
`;

const StyledImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 4px;
`;


function Challenge({ title, stories, bonus, completed, handleChange }) {

  const [tasks, setTasks] = useState(stories);
  const [challengeBonus, setChallengeBonus] = useState(bonus);
  const [completedExercise, setCompletedExercise] = useState(completed);

  const toggleTask = (i) => {
    const newTasks = tasks.map((e, index) => i === index ? ({ ...e, completed: !e.completed }) : e);
    setTasks(newTasks);
    const isCompleted = handleChange('stories', i);
    setCompletedExercise(isCompleted)
  };

  const toggleBonus = (i) => {
    const newBonus = challengeBonus.map((e, index) => i === index ? ({ ...e, completed: !e.completed }) : e);
    setChallengeBonus(newBonus);
    const isCompleted = handleChange('bonus', i);
    setCompletedExercise(isCompleted)
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>{title}</h1>
        <CompletedHeader completed={completedExercise}>
          {completedExercise && 'You completed this exercise!'}
        </CompletedHeader>
      </TitleWrapper>
      <div>
        <h2><StyledImg src={info} />User Stories</h2>
        {tasks.map((item, i) => (
          <TaskWrapper>
            <Checkbox checked={item.completed} onChange={() => toggleTask(i)} />
            <TaskText checked={item.completed}>{item.text}</TaskText>
          </TaskWrapper>
        ))}
      </div>
      <div>
        <h2><StyledImg src={star} />Bonus Stories</h2>
        {bonus.map((item, i) => (
          <TaskWrapper>
            <Checkbox checked={item.completed} onChange={() => toggleBonus(i)} />
            <TaskText checked={item.completed}>{item.text}</TaskText>
          </TaskWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default Challenge
