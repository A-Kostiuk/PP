import React, { FC, FormEvent } from 'react';

import GalleryCustomSelect from '../../ui/gallery-custom-select/gallery-custom-select';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectGallery } from '../../../store/selectors';
import { setOrder, setLimit, setType, setBreed, fetchGalleryImages } from '../../../store/gallery-slice/gallery-sliice';
import { SelectOption } from '../../../interfaces/select-option';
import { Form, SubmitButton, SubmitWrapper } from './styled';

interface GalleryControlPanelProps {
  breedsList: SelectOption[];
}

const GalleryControlPanel: FC<GalleryControlPanelProps> = ({breedsList}) => {

  const dispatch = useCustomDispatch();

  const {order, type, breed, limit} = useCustomSelector(selectGallery);

  const orderOptions: SelectOption[] = [
    {value: 'RAND', label: 'Random'},
    {value: 'DESC', label: 'Desc'},
    {value: 'ASC', label: 'Asc'},
  ];

  const typeOptions: SelectOption[] = [
    {value: 'jpg,gif,png', label: 'All'},
    {value: 'jpg,png', label: 'Static'},
    {value: 'gif', label: 'Animated'},
  ];

  const limitOptions: SelectOption[] = [
    {value: 5, label: '5 items per page'},
    {value: 10, label: '10 items per page'},
    {value: 15, label: '15 items per page'},
    {value: 20, label: '20 items per page'},
  ];

  const handleSelectOnChange = {
    order: (newValue: SelectOption) => {
      dispatch(setOrder(newValue));
    },
    type: (newValue: SelectOption) => {
      dispatch(setType(newValue));
    },
    limit: (newValue: SelectOption) => {
      dispatch(setLimit(newValue));
    },
    breed: (newValue: SelectOption) => {
      dispatch(setBreed(newValue));
    },
  };

  const handleFormOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchGalleryImages());
  };

  return (
    <Form onSubmit={handleFormOnSubmit}>
      <GalleryCustomSelect label={'Order'} options={orderOptions} onChange={handleSelectOnChange.order} value={order} />
      <GalleryCustomSelect label={'Type'} options={typeOptions} onChange={handleSelectOnChange.type} value={type} />
      <GalleryCustomSelect label={'Breed'} options={breedsList} value={breed} onChange={handleSelectOnChange.breed} />
      <SubmitWrapper>
        <GalleryCustomSelect label={'Limit'} options={limitOptions} onChange={handleSelectOnChange.limit}
                             value={limit} />
        <SubmitButton aria-label={'Load new photos'}>
          <SharedSvgIcons width={18} height={20} id={'update'} />
        </SubmitButton>
      </SubmitWrapper>
    </Form>
  );
};

export default GalleryControlPanel;
