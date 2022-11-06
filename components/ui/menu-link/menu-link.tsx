import React, { FC } from 'react';
import Link from 'next/link';
import { NavLink } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { IMenuLink } from '../../../interfaces/menu-link';
import { useRouter } from 'next/router';


const MenuLink: FC<IMenuLink> = ({path, iconId}) => {
  const router = useRouter();
  const isCurrent = router.asPath.includes(path);
  return (<Link href={path}>
      <NavLink $isCurrent={isCurrent}>
        <SharedSvgIcons width={30} height={30} id={iconId} />
      </NavLink>
    </Link>
  );
};

export default MenuLink;
