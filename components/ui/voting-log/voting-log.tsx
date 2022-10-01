import React, { FC } from 'react';
import { Description, Icon, StyledVotingLog, Time } from './styled';
import { ILog } from '../../layouts/voting-logs-list/voting-logs-list';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';


const VotingLog: FC<ILog> = ({time, type, imageId, iconId}) => {
  return (
    <StyledVotingLog>
      <Time>{time}</Time>
      <Description>Image ID: <span>{imageId}</span> was added to {type}</Description>
      <Icon $iconId={iconId}>
        <SharedSvgIcons width={20} height={20} id={iconId} />
      </Icon>
    </StyledVotingLog>
  );
};

export default VotingLog;
