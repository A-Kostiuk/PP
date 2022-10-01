import React, { FC } from 'react';
import Select from 'react-select';
import { CSSProperties } from '@emotion/serialize';

interface Props {
  options?: string[];
  onChange?: () => void;
  defaultValue?: string;
}

const BreedsCustomSelect: FC<Props> = ({options = [], onChange, defaultValue}) => {
  const customStyles = {
    control: (provided: CSSProperties, state: any) => ({
      ...provided,
      width: '100%',
      backgroundColor: '#F8F8F7',
      borderRadius: '10px',
      border: 'none',
      height: '40px',
      boxShadow: state.isFocused ? 'inset 0 0 0 2px #FBE0DC;' : 'none',
      '&:hover': {
        boxShadow: 'inset 0 0 0 2px #FBE0DC;',
      },
    }),
    container: (provided: CSSProperties) => ({
      ...provided,
      flexGrow: '2',
    }),
    valueContainer: (provided: CSSProperties) => ({
      ...provided,
      paddingRight: '0',
    }),
  };

  return (
    <Select options={options}
            styles={customStyles}
            onChange={onChange}
            defaultValue={defaultValue}
            instanceId="long-value-select"
            components={{
              IndicatorSeparator: () => null,
            }} />
  );
};

export default BreedsCustomSelect;
