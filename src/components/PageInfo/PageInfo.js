import React from 'react';
import styled from 'styled-components';
import Heading from '../Atoms/Heading/Heading';

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 350px;

  p {
    font-size: 18px;
    margin: 15px 0 0;
  }
`;

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <Heading size={'heading'}>{title}</Heading>
    <p>{paragraph}</p>
  </Wrapper>
);

export default PageInfo;
