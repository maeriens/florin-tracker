import React from 'react'
import seedData from '../utils/seedLocalStorage';
import Challenge from './Challenge';
import ErrorComponent from './ErrorComponent';

function ChallengePage({ match }) {

  const { level, exercise } = match.params;

  if (!level || !exercise) {
    const msg = `An error ocurred when generating the URL. Either level (${level}) or the exercise ${exercise} are missing`;
    return <ErrorComponent message={msg} />
  }

  const data = seedData();

  if (!data) {
    const msg = 'No data could be fetched from localStorage';
    return <ErrorComponent message={msg} />
  }

  const exerciseDataIndex = data[level].findIndex(e => e.url === exercise);

  if (exerciseDataIndex === -1) {
    const msg = `Exercise with url=${exercise} not found in ${level}`;
    return <ErrorComponent message={msg} />
  }

  const exerciseData = data[level][exerciseDataIndex];

  const handleChange = (type, i) => {
    const newData = { ...exerciseData };
    const changedItem = newData[type][i];
    newData[type][i] = { ...changedItem, completed: !changedItem.completed };

    const isComplete = newData.stories.every(e => e.completed) && newData.bonus.every(e => e.completed);
    data[level][exerciseDataIndex] = { ...newData, completed: isComplete };
    localStorage.setItem('challengeData', JSON.stringify(data));
    return isComplete;
  };

  return <Challenge {...exerciseData} handleChange={handleChange} />
}

export default ChallengePage
