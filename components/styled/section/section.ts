import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: ${props => props.theme.colors.baseWhite};
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Section;
