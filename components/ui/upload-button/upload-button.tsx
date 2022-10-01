import React, { FC } from 'react';
import { Button } from './styled';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';

interface Props {

}

const UploadButton: FC<Props> = (props) => {
  return (
    <Button>
      <SharedSvgIcons width={16} height={16} id={'upload'} />
      Upload
    </Button>
  );
};

export default UploadButton;
