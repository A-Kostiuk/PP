import React, { FC } from 'react';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import SortButton from '../../components/ui/sort-button/sort-button';
import BreedsCustomSelect from '../../components/ui/breeds-custom-select/breeds-custom-select';
import { ControlPanel, DisplayPanel } from './styled';

interface Props {

}

const Index: FC<Props> = (props) => {
  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <ControlPanel>
          <Breadcrumbs />
          <BreedsCustomSelect />
          <DisplayPanel>
            <BreedsCustomSelect />
            <SortButton iconId={'sortZA'} handleSortButtonClick={() => {
            }} />
            <SortButton iconId={'sortAZ'} handleSortButtonClick={() => {
            }} />
          </DisplayPanel>
        </ControlPanel>
      </Section>
    </GlobalLayout>
  );
};

export default Index;
