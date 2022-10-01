import React, { FC } from 'react';
import { CSSProperties } from '@emotion/serialize';
import Select from 'react-select';
import { Label } from './styled';

interface Props {
  options?: string[];
  defaultValue?: string;
  onChange?: () => void;
  label: string;
}

const GalleryCustomSelect: FC<Props> = ({options = [], onChange, defaultValue, label}) => {
  const customStyles = {
    control: (provided: CSSProperties, state: any) => ({
      ...provided,
      width: '100%',
      backgroundColor: '#FFF',
      borderRadius: '10px',
      border: 'none',
      height: '40px',
      boxShadow: state.isFocused ? 'inset 0 0 0 2px #FBE0DC;' : 'none',
      '&:hover': {
        boxShadow: 'inset 0 0 0 2px #FBE0DC;',
      },
    }),
    valueContainer: (provided: CSSProperties) => ({
      ...provided,
      paddingRight: '0',
    }),
  };

  return (
    <div>
      <Label>{label}</Label>
      <Select options={options}
              styles={customStyles}
              onChange={onChange}
              defaultValue={defaultValue}
              instanceId="long-value-select"
              components={{
                IndicatorSeparator: () => null,
              }} />
    </div>
  );
};

export default GalleryCustomSelect;
