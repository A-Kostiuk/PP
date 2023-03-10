import React, { FC, FormEvent } from 'react';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectGallery } from '../../../store/selectors';
import { setOrder, setLimit, setType, setBreed, fetchGalleryImages } from '../../../store/gallery-slice/gallery-slice';
import { SelectOption } from '../../../interfaces/select-option';
import { Form, SubmitButton, SubmitWrapper } from './styled';
import GallerySelectItem from '../../ui/gallery-select-item/gallery-select-item';

interface GalleryControlPanelProps {
  breedsList: SelectOption[];
}

interface IControlItem {
  title: string;
  options: SelectOption[];
  value: SelectOption;
  onChangeHandler: (newValue: SelectOption) => void;
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

  const controlItems: IControlItem[] = [{
    title: 'order',
    options: orderOptions,
    value: order,
    onChangeHandler: (newValue) => {
      dispatch(setOrder(newValue));
    },
  }, {
    title: 'type',
    options: typeOptions,
    value: type,
    onChangeHandler: (newValue) => {
      dispatch(setType(newValue));
    },
  }, {
    title: 'breed',
    options: breedsList,
    value: breed,
    onChangeHandler: (newValue) => {
      dispatch(setBreed(newValue));
    },
  }, {
    title: 'limit',
    options: limitOptions,
    value: limit,
    onChangeHandler: (newValue) => {
      dispatch(setLimit(newValue));
    },
  }];


  const handleFormOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchGalleryImages());
  };

  return (
    <Form onSubmit={handleFormOnSubmit}>
      {controlItems.map(({title, options, onChangeHandler, value}, index, arr) => {
        if (index === arr.length - 1) {
          return <SubmitWrapper key={title}>
            <GallerySelectItem title={title} options={options} onChange={onChangeHandler}
                               value={value} bgControl={'secondary'} />
            <SubmitButton aria-label={'Load new photos'}>
              <SharedSvgIcons width={18} height={20} id={'update'} />
            </SubmitButton>
          </SubmitWrapper>;
        }

        return <GallerySelectItem key={title} title={title} options={options} onChange={onChangeHandler}
                                  value={value} bgControl={'secondary'} />;
      })}
    </Form>
  );
};

export default GalleryControlPanel;
