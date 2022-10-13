import React, { FC } from 'react';
import Select, { SingleValue } from 'react-select';
import { CSSProperties } from '@emotion/serialize';
import { darkTheme } from '../../../theme/dark';
import { lightTheme } from '../../../theme/light';
import useDarkMode from 'use-dark-mode';
import { SelectOption } from '../../../interfaces/select-option';

interface Props {
  options: SelectOption[];
  onChange: (newValue: SingleValue<any>) => void;
  value: SelectOption | null;
  placeholder?: string;
  isClearable?: boolean;
}

const BreedsCustomSelect: FC<Props> = ({options, onChange, value, placeholder, isClearable = false}) => {
  const isDarkMode = useDarkMode().value;
  const theme = isDarkMode ? darkTheme : lightTheme;

  const customStyles = {
    control: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: theme.colors.breedsControlBg,
      color: theme.colors.text,
      width: '100%',
      borderRadius: '10px',
      border: 'none',
      height: '40px',
      boxShadow: state.isFocused ? `inset 0 0 0 2px ${theme.colors.secondary}` : 'none',
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
    input: (provided: CSSProperties) => ({
      ...provided,
      color: theme.colors.text,
    }),
  };

  return (
    <Select options={options}
            styles={customStyles}
            onChange={onChange}
            value={value}
            isClearable={isClearable}
            instanceId="long-value-select"
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={placeholder} />
  );
};

export default BreedsCustomSelect;
