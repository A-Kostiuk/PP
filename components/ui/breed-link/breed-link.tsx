import React, { FC } from 'react';
import Link from 'next/link';
import { BreedName, StyledLink } from './styled';
import { Breed } from '../../../interfaces/breed';

interface Props {
  breed: Breed;
}

const BreedLink: FC<Props> = ({breed}) => {
  return (
    <Link href={`/breeds/${breed.id}`}>
      <StyledLink>
        <BreedName>{breed.name}</BreedName>
        <img src={breed.image.url} width={190} height={140} alt={breed.name} />
      </StyledLink>
    </Link>
  );
};

export default BreedLink;
