import React, { FC } from 'react';
import { SingleValue } from 'react-select';
import { Title } from './styled';
import { SelectOption } from '../../../interfaces/select-option';
import CustomSelect from '../custom-select/custom-select';

interface Props {
  options: SelectOption[];
  onChange: (newValue: SingleValue<any>) => void;
  title: string;
  value: SelectOption;
  bgControl?: 'primary' | 'secondary';
}

const GalleryCustomSelect: FC<Props> = ({options = [], onChange, title, value, bgControl}) => {

  return (
    <div>
      <Title htmlFor={title}>{title}</Title>
      <CustomSelect options={options} onChange={onChange} value={value} bgControl={bgControl} id={title} />
    </div>
  );
};

export default GalleryCustomSelect;
