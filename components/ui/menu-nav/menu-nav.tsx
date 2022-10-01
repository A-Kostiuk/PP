import React, { FC } from 'react';
import { Li, Ul } from '../../styled';
import Link from 'next/link';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { AppRoutes } from '../../../const';
import { NavLink, NavList } from './styled';

interface ILink {
  iconId: string;
  path: string;
}

const navigation: ILink[] = [
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
        <Link href={link.path}>
          <NavLink>
            <SharedSvgIcons width={30} height={30} id={link.iconId} />
          </NavLink>
        </Link>
      </Li>)}
    </NavList>
  );
};

export default MenuNav;
