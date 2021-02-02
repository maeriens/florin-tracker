import initialAppState from '../initialAppState';

const seedData = () => {
  let savedData = localStorage.getItem('challengeData');
  if (!savedData) {
    localStorage.setItem('challengeData', JSON.stringify(initialAppState));
  }
  savedData = localStorage.getItem('challengeData')
  return JSON.parse(savedData);
}

export default seedData;

