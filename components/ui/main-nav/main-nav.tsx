import React, { FC } from 'react';
import { AppRoutes } from '../../../const';
import LinkCard from '../link-card/link-card';
import votingImage from '../../../public/navigation/voting.png';
import breedsImage from '../../../public/navigation/breeds.png';
import galleryImage from '../../../public/navigation/gallery.png';
import { LinksList, NavItem } from './styled';

interface Props {

}

interface ILink {
  title: string;
  image: string;
  path: string;
}

const MainNav: FC<Props> = () => {
  const navigation: ILink[] = [
    {
      title: 'Voting',
      image: votingImage.src,
      path: AppRoutes.VOTING,
    },
    {
      title: 'Breeds',
      image: breedsImage.src,
      path: AppRoutes.BREEDS,
    },
    {
      title: 'Gallery',
      image: galleryImage.src,
      path: AppRoutes.GALLERY,
    },
  ];

  return (
    <nav>
      <LinksList>
        {navigation.map((link) => <NavItem key={link.path}>
          <LinkCard title={link.title} image={link.image} path={link.path} />
        </NavItem>)}
      </LinksList>
    </nav>
  );
};

export default MainNav;
