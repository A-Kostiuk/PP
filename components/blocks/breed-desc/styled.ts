import styled from 'styled-components';
import { P } from '../../styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #FBE0DC;
  border-radius: 20px;
  padding: 25px 40px 40px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
`;

export const BreedTitle = styled(P)`
  display: inline-block;
  font-weight: 500;
  line-height: 1.5;
  font-size: 36px;
  margin: -55px auto 0;
  background-color: ${props => props.theme.colors.baseWhite};
  padding: 0 40px;
`;

export const BreedSubtitle = styled(P)`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.grey200};
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const DescList = styled.dl`
  margin: 0;
`;
export const DescTitle = styled.dl`
  font-weight: 500;
  margin: 0;
`;

export const DescDetails = styled.div`
  margin: 0;
  color: ${props => props.theme.colors.grey200};
`;

export const DescWrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 360px;
  margin-bottom: 50px;
  border-radius: 20px;
  object-fit: cover;
`;

