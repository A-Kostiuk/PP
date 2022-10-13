import React, { FC } from 'react';
import Link from 'next/link';
import { BreedName, Img, StyledLink } from './styled';
import { BreedOption } from '../../../interfaces/breed';

interface Props {
  breed: BreedOption;
}

const BreedLink: FC<Props> = ({breed}) => {
  return (
    <Link href={`/breeds/${breed.id}`}>
      <StyledLink>
        <BreedName>{breed.name}</BreedName>
        <Img src={breed.image.url} width={190} height={140} alt={breed.name} />
      </StyledLink>
    </Link>
  );
};

export default BreedLink;
