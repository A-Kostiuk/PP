import React, { FC } from 'react';
import { Li, Ul } from '../../styled';
import Link from 'next/link';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { AppRoutes } from '../../../const';
import { NavList } from './styled';
import { IMenuLink } from '../../../interfaces/menu-link';
import MenuLink from '../menu-link/menu-link';


const navigation: IMenuLink[] = [
  {
    iconId: 'like',
    path: AppRoutes.LIKES,
  },
  {
    iconId: 'favorite',
    path: AppRoutes.FAVORITES,

  },
  {
    iconId: 'dislike',
    path: AppRoutes.DISLIKES,
  },
];

const MenuNav: FC = () => {
  return (
    <NavList>
      {navigation.map((link) => <Li key={link.path}>
        <MenuLink {...link} />
      </Li>)}
    </NavList>
  );
};

export default MenuNav;
