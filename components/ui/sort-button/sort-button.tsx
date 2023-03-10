import React, { FC, ReactNode } from 'react';
import { SortButtonStyled } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import HiddenElement from '../hidden-element/hidden-element';

interface Props {
  iconId: string;
  handleSortButtonClick: () => void;
  ariaLabel: string;
}

const SortButton: FC<Props> = ({iconId, handleSortButtonClick, ariaLabel}) => {
  return (
    <SortButtonStyled onClick={handleSortButtonClick}>
      <SharedSvgIcons width={19} height={22} id={iconId} />
      <HiddenElement>
        {ariaLabel}
      </HiddenElement>
    </SortButtonStyled>
  );
};

export default SortButton;
