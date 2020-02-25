import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: black;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  overflow: hidden;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  z-index: 3;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: transparent;
  transition: background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: ${({ color, theme }) =>
      color ? color : theme.colors.overlay};

    & + div {
      transform: scale(1.2);
    }
  }
`;

const Preview = ({ title, image, slug }) => (
  <PreviewWrapper to={`/articles/${slug}`}>
    <Overlay />
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
