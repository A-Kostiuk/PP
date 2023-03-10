import React, { ComponentProps, ElementType } from 'react';
import styles from './styles.module.css';

interface HiddenElementOwnProps<E extends ElementType = ElementType> {
  children: string;
  as?: E;
}

type HiddenElementProps<E extends ElementType> =
  HiddenElementOwnProps<E>
  & Omit<ComponentProps<E>, keyof HiddenElementOwnProps>

const defaultElement = 'span';

const HiddenElement = <E extends ElementType = typeof defaultElement>({children, as}: HiddenElementProps<E>) => {
  const TagName = as || defaultElement;

  return (
    <TagName className={styles['visually-hidden']}>
      {children}
    </TagName>
  );
};

export default HiddenElement;
