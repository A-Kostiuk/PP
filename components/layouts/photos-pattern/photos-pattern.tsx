import React, { FC, ReactNode } from 'react';
import { PhotosPatternStyled, Wrapper } from './styled';

interface Props {
  children: ReactNode;
}

const PhotosPattern: FC<Props> = ({children}) => {
  return (
    <Wrapper>
      <PhotosPatternStyled>
        {children}
      </PhotosPatternStyled>
    </Wrapper>
  );
};

export default PhotosPattern;
