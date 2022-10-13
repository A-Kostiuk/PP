import React, { FC, ReactNode } from 'react';
import { Button } from './styled';

interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const PaginationButton: FC<Props> = ({onClick, children}) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default PaginationButton;
