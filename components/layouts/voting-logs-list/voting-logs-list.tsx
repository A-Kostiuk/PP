import React, { FC } from 'react';
import { LogsList, NoLogs, Wrapper } from './styled';
import VotingLog from '../../ui/voting-log/voting-log';
import { useCustomSelector } from '../../../hooks/store';
import { selectVoting } from '../../../store/selectors';

const VotingLogsList: FC = () => {
  const votingLogsList = useCustomSelector(selectVoting).actionLogs;
  return (
    <Wrapper>
      <LogsList>
        {votingLogsList.length ? votingLogsList.map((log) => (
            <VotingLog key={log.imageId} {...log} />
          )) :
          <NoLogs>You haven`&apos;t got any logs yet.</NoLogs>
        }
      </LogsList>
    </Wrapper>
  );
};

export default VotingLogsList;
