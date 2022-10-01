import React, { FC } from 'react';
import { ActionButton, Img, VotingActionsList } from './styled';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';
import { Li } from '../../styled';
import picture from '../../../public/home-screen.png';

interface VotingAction {
  title: string;
  iconId: string;
  onClick: () => void;
}

const votingActions: VotingAction[] = [
  {
    title: 'Add to likes',
    iconId: 'like',
    onClick() {
    },
  },
  {
    title: 'Add to favorites',
    iconId: 'favorite',
    onClick() {
    },
  },
  {
    title: 'Add to dislikes',
    iconId: 'dislike',
    onClick() {
    },
  },
];


interface Props {

}

const VotingWindow: FC<Props> = (props) => {
  return (
    <>
      <Img
        // src={votingPicture?.url}
        src={picture.src}
        width={640} height={360} alt="" />
      <VotingActionsList>
        {votingActions.map((action) =>
          (<Li key={action.iconId}>
            <ActionButton aria-label={action.title} $type={action.iconId} onClick={action.onClick}>
              <SharedSvgIcons width={30} height={30} id={action.iconId} />
            </ActionButton>
          </Li>),
        )}
      </VotingActionsList>
    </>
  );
};

export default VotingWindow;
