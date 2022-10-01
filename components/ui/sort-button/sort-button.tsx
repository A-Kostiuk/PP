import React, { FC } from 'react';
import { SortButtonStyled } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';

interface Props {
  iconId: string
  handleSortButtonClick: () => void
}

const SortButton: FC<Props> = ({iconId, handleSortButtonClick}) => {
  return (
    <SortButtonStyled onClick={handleSortButtonClick}>
      <SharedSvgIcons width={19} height={22} id={iconId} />
    </SortButtonStyled>
  );
};

export default SortButton;
