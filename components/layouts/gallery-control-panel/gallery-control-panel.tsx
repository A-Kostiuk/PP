import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import GalleryCustomSelect from '../../ui/gallery-custom-select/gallery-custom-select';
import { Form, SubmitButton, SubmitWrapper } from './styled';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';

interface Props {

}

interface IFormInput {
  order: string;
  type: string;
  breed: string;
  limit: string;
}

const GalleryControlPanel: FC<Props> = (props) => {
  const {register, handleSubmit} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  return (
    <Form>
      <GalleryCustomSelect label={'Order'} />
      <GalleryCustomSelect label={'Type'} />
      <GalleryCustomSelect label={'Breed'} />
      <SubmitWrapper>
        <GalleryCustomSelect label={'Limit'} />
        <SubmitButton aria-label={'Load new photos'}>
          <SharedSvgIcons width={18} height={20} id={'update'} />
        </SubmitButton>
      </SubmitWrapper>
    </Form>
  );
};

export default GalleryControlPanel;
