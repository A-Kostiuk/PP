import React, { FC } from 'react';
import { Button } from './styled';

interface Props {

}

const BurgerMenu: FC<Props> = (props) => {
  return (
    <Button aria-label='Відкрити меню'/>
  );
};

export default BurgerMenu;
