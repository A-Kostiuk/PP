import React, { FC, useState } from 'react';
import { OpeningButton, OpenedMenu, Wrapper } from './styled';
import MainNav from '../main-nav/main-nav';
import ClosingButton from '../closing-button/closing-button';
import ToggleTheme from '../toggle-theme/toggle-theme';

const BurgerMenu: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpeningButtonOnClick = () => {
    setIsOpened(true);
  };
  const handleClosingButtonOnClick = () => {
    setIsOpened(false);
  };

  return (<>
      <OpeningButton onClick={handleOpeningButtonOnClick} aria-label="Open menu" />
      {isOpened && <OpenedMenu>
        <Wrapper>
          <ToggleTheme />
          <ClosingButton onClick={handleClosingButtonOnClick} ariaLabel={'Close menu'} btnSize={60} imgSize={26} />
        </Wrapper>
        <MainNav />
      </OpenedMenu>}
    </>
  );
};

export default BurgerMenu;
