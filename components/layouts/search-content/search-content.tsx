import React, { FC } from 'react';
import { BreedResponse } from '../../../interfaces/breed';
import { Li, P } from '../../styled';
import BreedLink from '../../ui/breed-link/breed-link';
import PhotosPattern from '../photos-pattern/photos-pattern';

interface Props {
  breeds: BreedResponse[] | null;
}

const SearchContent: FC<Props> = ({breeds}) => {
  if (!breeds) {
    return <P>Enter your request in the search bar.</P>;
  } else if (breeds.length < 1) {
    return <P>No relevant results found.</P>;
  }
  return (
    <PhotosPattern>
      {!!breeds.length && breeds.map((breed) => <Li key={breed.id}><BreedLink breed={breed} /></Li>)}
    </PhotosPattern>
  );
};

export default SearchContent;
