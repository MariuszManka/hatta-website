import Image from 'gatsby-image';
import styled from 'styled-components';

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh !important;
  overflow: hidden;
  object-fit: cover;
`;

export default ImageWrapper;
