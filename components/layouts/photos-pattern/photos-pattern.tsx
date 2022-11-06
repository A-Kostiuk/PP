import React, { FC, ReactNode } from 'react';
import { Container, PhotosPatternStyled, Wrapper } from './styled';

interface Props {
  children: ReactNode;
}

const PhotosPattern: FC<Props> = ({children}) => {
  return (
    <Wrapper>
      <Container>
        <PhotosPatternStyled>
          {children}
        </PhotosPatternStyled>
      </Container>
    </Wrapper>
  );
};

export default PhotosPattern;
