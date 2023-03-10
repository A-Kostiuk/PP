import React, { FC } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { SelectOption } from '../../../interfaces/select-option';
import { useTheme } from 'styled-components';

interface Props {
  options: SelectOption[];
  onChange: (newValue: SingleValue<any>) => void;
  value: SelectOption | null;
  placeholder?: string;
  isClearable?: boolean;
  flexGrow?: number;
  minWidth?: number;
  bgControl?: 'primary' | 'secondary';
  id: string;
}

const CustomSelect: FC<Props> = ({
                                   options,
                                   onChange,
                                   value,
                                   placeholder,
                                   isClearable = false,
                                   flexGrow = 1,
                                   minWidth = 110,
                                   bgControl = 'primary',
                                   id,
                                 }) => {
  const {colors} = useTheme();

  const customStyles: StylesConfig = {
    control: (provided, state) => {
      const backgroundColor = bgControl === 'primary' ? colors.breedsControlBgPrimary : colors.breedsControlBgSecondary;
      return ({
        ...provided,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: backgroundColor,
        color: colors.text,
        borderRadius: '10px',
        border: 'none',
        height: '40px',
        boxShadow: state.isFocused ? `inset 0 0 0 2px ${colors.secondary}` : 'none',
        '&:hover': {
          boxShadow: 'inset 0 0 0 2px #FBE0DC;',
        },
      });
    },
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
      color: colors.text,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: colors.text,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? colors.secondary : state.isFocused ? colors.primary : '',
      color: state.isFocused ? colors.baseBlack : '',
      '&:active': {
        backgroundColor: colors.primary,
      },
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: colors.primaryBackground,
      color: colors.text,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: colors.text,
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
            placeholder={placeholder}
            inputId={id}
    />
  );
};

export default CustomSelect;
