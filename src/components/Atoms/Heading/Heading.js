import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  text-transform: capitalize;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.blackColor};
  font-weight: ${({ weigth, theme }) =>
    weigth ? weigth : theme.fontWeight.bold};
  font-size: ${({ size, theme }) =>
    size ? theme.fontSize[size] : theme.fontSize.mid};
`;

export default Heading;
