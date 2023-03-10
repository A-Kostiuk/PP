import React, { FC } from 'react';
import { Form, SearchField, SubmitButton } from './styled';
import { useRouter } from 'next/router';
import { AppRoutes } from '../../../const';
import HiddenElement from '../../ui/hidden-element/hidden-element';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { setSearchValue } from '../../../store/search-slice/search-slice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SharedSvgIcons } from '../../ui/shared-svg-icons/shared-svg-icons';

interface FormValues {
  searchValue: string;
}

const Search: FC = () => {
  const dispatch = useCustomDispatch();
  const {searchValue} = useCustomSelector((state) => state.search);
  const router = useRouter();

  const defaultValue = router.route === AppRoutes.SEARCH ? searchValue : '';

  const {register, handleSubmit} = useForm<FormValues>({
    defaultValues:
      {searchValue: defaultValue},
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setSearchValue(data.searchValue));
    router.push(AppRoutes.SEARCH + '?q=' + data.searchValue);
  };

  return (<Form onSubmit={handleSubmit(onSubmit)}>
      <HiddenElement as={'label'} htmlFor="search">Search for breeds by name</HiddenElement>
      <SearchField {...register('searchValue')} id="search" type="text"
                   placeholder="Search for breeds by name" />
      <SubmitButton type={'submit'}>
        <HiddenElement>Search</HiddenElement>
        <SharedSvgIcons width={20} height={20} id="search" />
      </SubmitButton>
    </Form>
  );
};

export default Search;
