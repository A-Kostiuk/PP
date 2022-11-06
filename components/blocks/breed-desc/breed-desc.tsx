import React, { FC } from 'react';
import Image from 'next/image';

import { Breed } from '../../../interfaces/breed';
import {
  Wrapper,
  DescWrapper,
  DescDetails,
  DescList,
  DescTitle,
  BreedTitle,
  Container,
  BreedSubtitle, StyledSwiper, NoInformation, SwiperSlideStyled,
} from './styled';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  breed: Breed;
}

const BreedDesc: FC<Props> = ({breed}) => {
  const {temperament, origin, weight, life_span, images, name, id} = breed;

  const leftColumn = [
    {
      title: 'Temperament:',
      details: temperament,
    },
  ];

  const rightColumn = [
    {
      title: 'Origin:',
      details: origin,
    },
    {
      title: 'Weight:',
      details: weight?.metric,
    },
    {
      title: 'Life span:',
      details: life_span,
    },
  ];

  if (!id) {
    return (<NoInformation>
      Sorry, we haven`&apos;t got any information about this breed.
    </NoInformation>);
  }
  return (
    <>
      <StyledSwiper
        modules={[Pagination]}
        spaceBetween={20}
        direction="horizontal"
        slidesPerView="auto"
        mousewheel={true}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
      >
        {images.map(image => <SwiperSlideStyled key={image.id}><Image src={image.url} layout={'fill'}
                                                                      objectFit={'cover'} /></SwiperSlideStyled>)}
      </StyledSwiper>
      <Wrapper>
        <BreedTitle>{name}</BreedTitle>
        <BreedSubtitle>Family companion cat</BreedSubtitle>
        <Container>
          <DescList>
            {leftColumn.map((desc) => (
              <div key={desc.title}>
                < DescTitle> {desc.title}</DescTitle>
                <DescDetails>{desc.details}</DescDetails>
              </div>
            ))}
          </DescList>
          <DescList>
            {rightColumn.map((desc) => (
              <DescWrapper key={desc.title}>
                <DescTitle> {desc.title}&nbsp;</DescTitle>
                <DescDetails>{desc.details}</DescDetails>
              </DescWrapper>
            ))}
          </DescList>
        </Container>
      </Wrapper>
    </>
  );
};
export default BreedDesc;
