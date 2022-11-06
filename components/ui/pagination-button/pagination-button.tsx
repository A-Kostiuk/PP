import React, { FC, ReactNode } from 'react';
import { Button } from './styled';

interface Props {
  onClick: () => void;
  children: ReactNode;
  disabled: boolean;
}

const PaginationButton: FC<Props> = ({onClick, children, disabled = false}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default PaginationButton;
