import React, { FC } from 'react';
import { CSSProperties } from '@emotion/serialize';
import Select from 'react-select';
import { Label } from './styled';
import useDarkMode from 'use-dark-mode';
import { lightTheme } from '../../../theme/light';
import { darkTheme } from '../../../theme/dark';

interface Props {
  options?: string[];
  defaultValue?: string;
  onChange?: () => void;
  label: string;
}

const GalleryCustomSelect: FC<Props> = ({options = [], onChange, defaultValue, label}) => {
  const isDarkMode = useDarkMode().value;
  const customStyles = {
    control: (provided: CSSProperties, state: any) => ({
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
    valueContainer: (provided: CSSProperties) => ({
      ...provided,
      paddingRight: '0',
    }),
    input: (provided: CSSProperties) => ({
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
              defaultValue={defaultValue}
              instanceId="long-value-select"
              components={{
                IndicatorSeparator: () => null,
              }} />
    </div>
  );
};

export default GalleryCustomSelect;
