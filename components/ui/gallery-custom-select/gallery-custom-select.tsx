import React, { FC } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { Label } from './styled';
import useDarkMode from 'use-dark-mode';
import { lightTheme } from '../../../theme/light';
import { darkTheme } from '../../../theme/dark';
import { SelectOption } from '../../../interfaces/select-option';

interface Props {
  options: SelectOption[];
  onChange?: (newValue: SingleValue<any>) => void;
  label: string;
  value: SelectOption;
}

const GalleryCustomSelect: FC<Props> = ({options = [], onChange, label, value}) => {
  const isDarkMode = useDarkMode().value;
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      backgroundColor: isDarkMode ? darkTheme.colors.primaryBackground : lightTheme.colors.primaryBackground,
      color: isDarkMode ? darkTheme.colors.text : lightTheme.colors.text,
      borderRadius: '10px',
      border: 'none',
      height: '40px',
      boxShadow: state.isFocused ? `inset 0 0 0 2px ${isDarkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary}` : 'none',
      '&:hover': {
        boxShadow: `inset 0 0 0 2px ${isDarkMode ? darkTheme.colors.primary : lightTheme.colors.primary}`,
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingRight: '0',
    }),
    input: (provided) => ({
      ...provided,
      color: isDarkMode ? darkTheme.colors.text : lightTheme.colors.text,
    }),
  };

  return (
    <div>
      <Label>{label}</Label>
      <Select options={options}
              styles={customStyles}
              onChange={onChange}
              value={value}
              instanceId="long-value-select"
              components={{
                IndicatorSeparator: () => null,
              }} />
    </div>
  );
};

export default GalleryCustomSelect;
