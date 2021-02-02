import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const ErrorWrapper = styled.div`
  text-align: center;
`;

function ErrorComponent({ message }) {
  return (
    <ErrorWrapper>
      <div>
        <h1>Uh oh. This is on me...</h1>
        <p>{message}</p>
        <p>Please report the issue in the github page!</p>
      </div>
      <div>
        <Link to='/'>
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </ErrorWrapper>
  )
}

export default ErrorComponent
