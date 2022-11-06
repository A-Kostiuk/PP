import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primaryBackground};
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.grey200};
  border-radius: 10px;
  display: flex;
  gap: 10px;
`;
