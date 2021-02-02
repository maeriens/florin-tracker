import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a.attrs({ target: '_blank' })`
  color: inherit;
`;

const gitUrl = "https://github.com/maeriens/florin-tracker";
const issuesUrl = gitUrl + "/issues";


function About() {
  return (
    <Wrapper>
      <h2><Anchor href="https://github.com/maeriens">@maeriens</Anchor> - 2021</h2>
      <h2>Made with a mix of emotions and trying to improve my skills. And lots of coffee.</h2>
      <h2>Any improvements are welcome!</h2>
      <h2><Anchor href={gitUrl}>Github</Anchor> - <Anchor href={issuesUrl}>Issues</Anchor></h2>
    </Wrapper>
  )
}

export default About
