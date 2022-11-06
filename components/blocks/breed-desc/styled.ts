import styled from 'styled-components';
import { P } from '../../styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 2px solid #FBE0DC;
  border-radius: 20px;
  padding: 25px 40px 40px;
`;

export const Container = styled.div`
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
  }
`;

export const BreedTitle = styled(P)`
  display: inline-block;
  font-weight: 500;
  line-height: 1.5;
  font-size: 36px;
  margin: -55px auto 0;
  background-color: ${props => props.theme.colors.primaryBackground};
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

export const SwiperSlideStyled = styled(SwiperSlide)`
  border-radius: 20px;
  overflow: hidden;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 360px;


  .swiper-pagination {
    overflow: auto;
    background-color: ${({theme}) => theme.colors.primaryBackground};
    padding: 10px;
    display: flex;
    justify-content: center;
    bottom: 10px;
    border-radius: 20px;
    width: auto;
    left: 50%;
    transform: translate(-50%, 0)
  }

  .swiper-pagination-bullet {
    background-color: ${({theme}) => theme.colors.primary};
    opacity: 1;
    margin: 0 5px;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({theme}) => theme.colors.secondary};
  }
}
`;

export const NoInformation = styled(P)`
  font-weight: 500;
`;

