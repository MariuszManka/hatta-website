import React from 'react';
import ImageWrapper from '../components/Atoms/HeroImageWrapper/HeroImageWrapper';
import { graphql } from 'gatsby';
import Heading from '../components/Atoms/Heading/Heading';
import styled from 'styled-components';

const TextWrapper = styled.section`
  width: 50%;
  margin-right: 80px;
`;

const AboutWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 100px;
  padding-left: 80px;
`;

const Line = styled.div`
  width: 100vw;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.blackColor};
  margin: 25px 0;
`;

const AboutPage = ({ data }) => {
  const {
    allDatoCmsAbout: { nodes },
  } = data;

  return (
    <AboutWrapper>
      {nodes.map(item => {
        return (
          <div key={item.id}>
            <TextWrapper>
              <Heading size={'heading'}>{item.heading}</Heading>
              <p>{item.shortdescription}</p>
              <Line />
              <p>{item.description}</p>
              <Heading size={'extraLarge'}>{item.author}</Heading>
              <Line />
            </TextWrapper>
            <ImageWrapper fluid={item.hero.fluid} />
          </div>
        );
      })}
    </AboutWrapper>
  );
};

export const query = graphql`
  query AboutQuery {
    allDatoCmsAbout {
      nodes {
        id
        heading
        author
        description
        shortdescription
        hero {
          fluid(maxWidth: 900, maxHeight: 1000) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default AboutPage;
