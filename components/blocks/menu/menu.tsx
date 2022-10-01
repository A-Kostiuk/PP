import React, { FC } from 'react';
import BurgerMenu from '../../ui/burger-menu/burger-menu';
import Search from '../../ui/search/search';
import MenuNav from '../../ui/menu-nav/menu-nav';
import { StyledMenu } from './styled';

interface Props {

}

const Menu: FC<Props> = (props) => {
  return (
    <StyledMenu>
      <BurgerMenu />
      <Search />
      <MenuNav />
    </StyledMenu>
  );
};

export default Menu;
