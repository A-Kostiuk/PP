import React, { FC } from 'react';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { ClosingButtonStyled } from './styled';

interface ClosingButtonProps {
  onClick: () => void;
  ariaLabel: string;
  btnSize: number;
  imgSize: number;
}

const ClosingButton: FC<ClosingButtonProps> = ({onClick, ariaLabel, imgSize, btnSize}) => {
  return (
    <ClosingButtonStyled aria-label={ariaLabel} onClick={onClick} $btnSize={btnSize} $imgSize={imgSize}>
      <SharedSvgIcons width={imgSize} height={imgSize} id={'close'} />
    </ClosingButtonStyled>
  );
};

export default ClosingButton;
