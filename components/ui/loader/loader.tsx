import React, { FC } from 'react';
import { StyledLoader } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';

interface Props {
  mobileHeight?: number;
  tabletHeight?: number;
}

const Loader: FC<Props> = ({mobileHeight, tabletHeight}) => {
  return (
    <StyledLoader $mobileHeight={mobileHeight} $tabletHeight={tabletHeight}>
      <SharedSvgIcons width={100} height={100} id={'loader'} />
    </StyledLoader>
  );
};

export default Loader;
