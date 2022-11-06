import React, { FC } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
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
  flexGrow?: number;
  minWidth?: number;
}

const BreedsCustomSelect: FC<Props> = ({
                                         options,
                                         onChange,
                                         value,
                                         placeholder,
                                         isClearable = false,
                                         flexGrow = 1,
                                         minWidth = 110,
                                       }) => {
  const isDarkMode = useDarkMode().value;
  const theme = isDarkMode ? darkTheme : lightTheme;

  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: theme.colors.breedsControlBg,
      color: theme.colors.text,
      borderRadius: '10px',
      border: 'none',
      height: '40px',
      boxShadow: state.isFocused ? `inset 0 0 0 2px ${theme.colors.secondary}` : 'none',
      '&:hover': {
        boxShadow: 'inset 0 0 0 2px #FBE0DC;',
      },
    }),
    container: (provided) => ({
      ...provided,
      flexGrow: flexGrow,
      position: 'relative',
      minWidth: `${minWidth}px`,
      height: '40px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingRight: '0',
    }),
    input: (provided) => ({
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
