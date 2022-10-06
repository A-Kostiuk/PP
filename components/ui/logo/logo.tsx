import React, { FC } from 'react';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { StyledLogo, Icon, Text } from './styled';
import Link from 'next/link';
import { AppRoutes } from '../../../const';


const Logo: FC = () => {
  return (
    <Link href={AppRoutes.HOME} >
      <StyledLogo>
        <Icon>
          <SharedSvgIcons width={24} height={24} id={'logo'} />
        </Icon>
        <Text>PetProject</Text>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
