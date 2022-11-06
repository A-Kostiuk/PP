import React, { FC, FormEvent, useCallback, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import {
  setFileName,
  setSrcPreview,
  setStatus,
  setErr,
  uploadImage,
} from '../../../store/uploading-slice/uploading-slice';
import { selectUploading } from '../../../store/selectors';

import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import StatusMessage from '../status-message/status-message';
import { Container, FileName, ImageWrapper, SubmitButton, Text } from './styled';

const Dropzone: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const {status, fileName, srcPreview, err} = useCustomSelector(selectUploading);
  const dispatch = useCustomDispatch();
  const accept = {
    'image/*': ['.jpeg', '.jpg', '.png'],
  };
  const maxFiles = 1;

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    dispatch(setFileName(file.name));
    dispatch(setStatus(null));
    setFile(file);
    const preview = () => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        if (reader.result) {
          dispatch(setSrcPreview(reader.result.toString()));
        }
      };
    };
    preview();
  }, [dispatch]);

  const onDropRejected = useCallback(
    () => {
      setFile(null);
      dispatch(setFileName(''));
      dispatch(setSrcPreview(''));
      dispatch(setStatus(null));
      dispatch(setErr('Please, upload a .jpg or .png cat image.'));
    },
    [dispatch],
  );

  const {getRootProps, getInputProps} = useDropzone({onDropAccepted, onDropRejected, accept, maxFiles});

  const handleFormOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (file) dispatch(uploadImage(file));
  };

  return (<form onSubmit={handleFormOnSubmit}>
      <Container {...getRootProps()} $status={status}>
        <input {...getInputProps()} />
        {srcPreview ?
          <ImageWrapper> <Image layout={'fill'} src={srcPreview} alt={fileName} /> </ImageWrapper> :
          <Text><b>Drag here</b> your file or <b>Click here</b> to upload</Text>
        }
        <SharedSvgIcons width={200} height={200} id={'uploadBg'} />
      </Container>
      <FileName>{err ? err : fileName ? fileName : 'No file selected'}</FileName>
      {fileName && status !== false ? <SubmitButton type={'submit'}>Upload photo</SubmitButton> : null}
      <StatusMessage status={status} />
    </form>
  );
};
export default Dropzone;
