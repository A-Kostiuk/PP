import React, { FC } from 'react';
import { Container } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';

interface StatusMessageProps {
  status: boolean | null;
}

const StatusMessage: FC<StatusMessageProps> = ({status}) => {
  switch (status) {
    case true :
      return (<Container>
        <SharedSvgIcons width={20} height={20} id={'check'} />
        Thanks for the Upload - Cat found!
      </Container>);
    case false :
      return (<Container>
        <SharedSvgIcons width={20} height={20} id={'cross'} />
        No Cat found - try a different one
      </Container>);
    default:
      return null;
  }

};

export default StatusMessage;
