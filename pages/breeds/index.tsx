import React, { FC, useEffect } from 'react';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Li, Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import SortButton from '../../components/ui/sort-button/sort-button';
import BreedsCustomSelect from '../../components/ui/breeds-custom-select/breeds-custom-select';
import { ControlPanel, DisplayPanel } from './styled';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchAllBreeds, fetchCurrentBreeds, setLimit, setSelectBreed } from '../../store/breeds-slice/breeds-slice';
import { SelectOption } from '../../interfaces/select-option';
import { selectBreeds } from '../../store/selectors';
import PhotosPattern from '../../components/layouts/photos-pattern/photos-pattern';
import BreedLink from '../../components/ui/breed-link/breed-link';

const limitOptions: SelectOption[] = [
  {value: 5, label: 'Limit: 5'},
  {value: 10, label: 'Limit: 10'},
  {value: 15, label: 'Limit: 15'},
  {value: 20, label: 'Limit: 20'},
];

const Index: FC = () => {
  const dispatch = useCustomDispatch();

  const limit = useCustomSelector(selectBreeds).limit;
  const currentBreeds = useCustomSelector(selectBreeds).currentBreeds;
  const allBreeds = useCustomSelector(selectBreeds).allBreeds;
  const selectBreed = useCustomSelector(selectBreeds).selectBreed;
  useEffect(() => {
    dispatch(fetchCurrentBreeds());
    dispatch(fetchAllBreeds());
  }, []);

  const handleLimitOnChange = (option: SelectOption | null) => {
    if (option) {
      dispatch(setLimit(option));
      dispatch(fetchCurrentBreeds());
    }
  };

  const handleAllBreedsOnChange = (option: SelectOption | null) => {
    if (option) {
      dispatch(setSelectBreed(option));
    }
  };

  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <ControlPanel>
          <Breadcrumbs />
          <BreedsCustomSelect options={allBreeds} value={selectBreed} onChange={handleAllBreedsOnChange}
                              placeholder={'All breeds'} />
          <DisplayPanel>
            <BreedsCustomSelect options={limitOptions} value={limit} onChange={handleLimitOnChange} />
            <SortButton iconId={'sortZA'} handleSortButtonClick={() => {
            }} />
            <SortButton iconId={'sortAZ'} handleSortButtonClick={() => {
            }} />
          </DisplayPanel>
        </ControlPanel>
        <PhotosPattern>
          {currentBreeds && currentBreeds.map((breed) => <Li key={breed.id}><BreedLink breed={breed} /></Li>)}
        </PhotosPattern>
      </Section>
    </GlobalLayout>
  );
};

export default Index;
