import { GetServerSideProps, NextPage } from 'next';
import { wrapper } from '../../store';
import React from 'react';
import { SingleValue } from 'react-select';

import {
  fetchAllBreeds,
  setLimit,
  setPage,
  setSelectBreed,
  sortCurrentBreeds,
} from '../../store/breeds-slice/breeds-slice';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectBreeds } from '../../store/selectors';
import { BreedOption } from '../../interfaces/breed';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import SortButton from '../../components/ui/sort-button/sort-button';
import BreedsCustomSelect from '../../components/ui/breeds-custom-select/breeds-custom-select';
import { SelectOption } from '../../interfaces/select-option';
import PhotosPattern from '../../components/layouts/photos-pattern/photos-pattern';
import BreedLink from '../../components/ui/breed-link/breed-link';
import PaginationButton from '../../components/ui/pagination-button/pagination-button';
import Loader from '../../components/ui/loader/loader';
import { Li, Section } from '../../components/styled';

import { ControlPanel, DisplayPanel, Pagination } from '../../pages-styles/breeds-page-styled.ts';

const limitOptions: SelectOption[] = [
  {value: 5, label: 'Limit: 5'},
  {value: 10, label: 'Limit: 10'},
  {value: 15, label: 'Limit: 15'},
  {value: 20, label: 'Limit: 20'},
];

const Index: NextPage = () => {
  const dispatch = useCustomDispatch();

  const limit = useCustomSelector(selectBreeds).limit;
  const currentBreeds = useCustomSelector(selectBreeds).currentBreeds;
  const allBreeds = useCustomSelector(selectBreeds).allBreeds;
  const selectBreed = useCustomSelector(selectBreeds).selectBreed;
  const page = useCustomSelector(selectBreeds).page;

  const handleLimitOnChange = (newValue: SingleValue<SelectOption | null>): void => {
    if (newValue) {
      dispatch(setLimit(newValue));
    }
  };

  const handleAllBreedsOnChange = (newValue: SingleValue<BreedOption | null>): void => {
    dispatch(setSelectBreed(newValue));
  };

  const handlePreviousOnClick = () => {
    dispatch(setPage(page - 1));
  };

  const handleNextOnClick = () => {
    dispatch(setPage(page + 1));
  };

  const handleSortZAOnClick = () => {
    dispatch(sortCurrentBreeds('z-a'));
  };

  const handleSortAZOnClick = () => {
    dispatch(sortCurrentBreeds('a-z'));
  };

  const isDisabledPreviousBtn = page === 0;
  const isDisabledNextBtn = allBreeds.length - page * Number(limit.value) < Number(limit.value);

  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <ControlPanel>
          <Breadcrumbs />
          <BreedsCustomSelect options={allBreeds} value={selectBreed} onChange={handleAllBreedsOnChange}
                              placeholder={'All breeds'} isClearable={true} flexGrow={100} minWidth={150} />
          <DisplayPanel>
            <BreedsCustomSelect options={limitOptions} value={limit} onChange={handleLimitOnChange} />
            <SortButton iconId={'sortZA'} handleSortButtonClick={handleSortZAOnClick} />
            <SortButton iconId={'sortAZ'} handleSortButtonClick={handleSortAZOnClick} />
          </DisplayPanel>
        </ControlPanel>
        {selectBreed ? <BreedLink breed={selectBreed} /> :
          <>
            <PhotosPattern>
              {currentBreeds && currentBreeds.map((breed) => <Li key={breed.id}><BreedLink breed={breed} /></Li>)}
            </PhotosPattern>
            <Pagination>
              <PaginationButton onClick={handlePreviousOnClick}
                                disabled={isDisabledPreviousBtn}>Previous</PaginationButton>
              <PaginationButton onClick={handleNextOnClick}
                                disabled={isDisabledNextBtn}>Next</PaginationButton>
            </Pagination>
          </>
        }
      </Section>
    </GlobalLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchAllBreeds());
  return {
    props: {},
  };
});
