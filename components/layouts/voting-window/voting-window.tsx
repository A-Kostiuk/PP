import React, { FC, useEffect } from 'react';
import { ActionButton, Img, Loader, VotingActionsList } from './styled';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';
import { Li } from '../../styled';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectVoting } from '../../../store/selectors';
import { dislike, favorite, fetchVotingPicture, like } from '../../../store/voting-slice/voting-slice';
import { throttle } from 'throttle-typescript';

interface VotingAction {
  title: string;
  iconId: string;
  onClick: () => void;
}

const VotingWindow: FC = () => {
  const dispatch = useCustomDispatch();
  const votingPicture = useCustomSelector(selectVoting).votingPicture;
  const isLoading = useCustomSelector(selectVoting).isLoading;

  useEffect(() => {
    if (!votingPicture.id) dispatch(fetchVotingPicture());
  }, []);


  const votingActions: VotingAction[] = [
    {
      title: 'Add to likes',
      iconId: 'like',
      onClick: () => {
        if (!isLoading) dispatch(like(votingPicture.id));
      },
    },
    {
      title: 'Add to favorites',
      iconId: 'favorite',
      onClick: () => {
        if (!isLoading) dispatch(favorite(votingPicture.id));
      },
    },
    {
      title: 'Add to dislikes',
      iconId: 'dislike',
      onClick: () => {
        if (!isLoading) dispatch(dislike(votingPicture.id));
      },
    },
  ];

  return (
    <>
      {isLoading ?
        <Loader><SharedSvgIcons width={100} height={100} id={'loader'} /></Loader> :
        <Img
          src={votingPicture.url}
          width={640} height={360} alt="" />}
      <VotingActionsList>
        {votingActions.map((action) =>
          (<Li key={action.iconId}>
            <ActionButton aria-label={action.title} $type={action.iconId} onClick={throttle(action.onClick, 1000)}>
              <SharedSvgIcons width={30} height={30} id={action.iconId} />
            </ActionButton>
          </Li>),
        )}
      </VotingActionsList>
    </>
  );
};

export default VotingWindow;
