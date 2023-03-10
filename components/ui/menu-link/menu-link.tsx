import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { NavLink } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { IMenuLink } from '../../../interfaces/menu-link';
import { useRouter } from 'next/router';
import HiddenElement from '../hidden-element/hidden-element';


const MenuLink: FC<IMenuLink> = ({path, iconId}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  let isCurrent = router.asPath.includes(path);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (<Link href={path} passHref legacyBehavior>
      <NavLink $isCurrent={isCurrent}>
        <HiddenElement as={'span'}>{`Route to ${path}`}</HiddenElement>
        <SharedSvgIcons width={30} height={30} id={iconId} />
      </NavLink>
    </Link>
  );
};

export default MenuLink;
