import React, { FC } from 'react';
import {
  Img,
  Wrapper,
  DescWrapper,
  DescDetails,
  DescList,
  DescTitle,
  BreedTitle,
  Container,
  BreedSubtitle,
} from './styled';
import { Breed } from '../../../interfaces/breed';

interface Props {
  breed: Breed | null;
}

const BreedDesc: FC<Props> = ({breed}) => {
  if (breed) {
    const leftColumn = [
      {
        title: 'Temperament:',
        details: breed.temperament,
      },
    ];

    const rightColumn = [
      {
        title: 'Origin:',
        details: breed.origin,
      },
      {
        title: 'Weight:',
        // details: breed.weight.metric,
        details: 'breed.weight.metric',
      },
      {
        title: 'Life span:',
        details: breed.life_span,
      },
    ];
    return (
      <>
        <Img src={breed.image?.url} width={640} height={360} style={{marginBottom: '50px', display: 'block'}} />
        <Wrapper>
          <BreedTitle>{breed.name}</BreedTitle>
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
  }
  return <div>Null</div>;
};
export default BreedDesc;
