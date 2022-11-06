import React, { FC, useState } from 'react';
import { OpeningButton, Title, UploadMenu, Text, Link, Blur } from './styled';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';
import ClosingButton from '../../ui/closing-button/closing-button';
import Dropzone from '../../ui/dropzone/dropzone';
import { useCustomSelector } from '../../../hooks/store';
import { selectUploading } from '../../../store/selectors';
import Loader from '../../ui/loader/loader';

const Upload: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const {isLoading} = useCustomSelector(selectUploading);

  const handleOpeningButtonOnClick = () => {
    setIsOpened(true);
  };
  const handleClosingButtonOnClick = () => {
    setIsOpened(false);
  };
  return (
    <>
      <OpeningButton onClick={handleOpeningButtonOnClick}>
        <SharedSvgIcons width={16} height={16} id={'upload'} />
        Upload
      </OpeningButton>
      {isOpened &&
        <>
          <Blur />
          <UploadMenu>
            <ClosingButton onClick={handleClosingButtonOnClick} ariaLabel={'Close upload'} btnSize={40} imgSize={17} />
            <Title>Upload a .jpg or .png Cat Image</Title>
            <Text>Any uploads must comply with the <Link href={'https://thecatapi.com/privacy'}>upload
              guidelines</Link> or face deletion.</Text>
            {isLoading ? <Loader /> : <Dropzone />}
          </UploadMenu>
        </>
      }
    </>);
};

export default Upload;
