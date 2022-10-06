import React, { FC } from 'react';
import { Description, Icon, StyledVotingLog, Time } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { ActionLog } from '../../../interfaces/actionLog';


const VotingLog: FC<ActionLog> = ({time, from, imageId, iconId}) => {
  return (
    <StyledVotingLog>
      <Time>{time}</Time>
      <Description>Image ID: <span>{imageId}</span> was added to {from}</Description>
      <Icon $iconId={iconId}>
        <SharedSvgIcons width={20} height={20} id={iconId} />
      </Icon>
    </StyledVotingLog>
  );
};

export default VotingLog;
