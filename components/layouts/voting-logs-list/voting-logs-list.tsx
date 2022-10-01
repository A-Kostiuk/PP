import React, { FC } from 'react';
import { LogsList } from './styled';
import VotingLog from '../../ui/voting-log/voting-log';

interface Props {

}

export interface ILog {
  time: string
  imageId: string
  type: string
  iconId: string
}

const votingLogsList: ILog[] = [
  {
    time: '20:27',
    imageId: 'fQSunHvl8',
    type: 'Likes',
    iconId: 'favorite',
  }, {
    time: '20:27',
    imageId: 'fQSunHvl6',
    type: 'Likes',
    iconId: 'dislike',
  },
];

const VotingLogsList: FC<Props> = (props) => {
  return (
    <LogsList>
      {votingLogsList.map((log) => (
          <VotingLog key={log.imageId} {...log} />
      ))}
    </LogsList>
  );
};

export default VotingLogsList;
