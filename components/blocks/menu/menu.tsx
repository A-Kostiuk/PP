import React, { FC } from 'react';
import BurgerMenu from '../../ui/burger-menu/burger-menu';
import Search from '../../ui/search/search';
import MenuNav from '../../ui/menu-nav/menu-nav';
import { StyledMenu } from './styled';

const Menu: FC = () => {
  return (
    <StyledMenu>
      <BurgerMenu />
      <Search />
      <MenuNav />
    </StyledMenu>
  );
};

export default Menu;
