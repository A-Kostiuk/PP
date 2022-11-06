import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import GlobalLayout from '../../../components/layouts/global-layout/global-layout';
import Menu from '../../../components/blocks/menu/menu';
import { Section } from '../../../components/styled';
import Breadcrumbs from '../../../components/ui/breadcrumbs/breadcrumbs';
import BreedDesc from '../../../components/blocks/breed-desc/breed-desc';
import { useCustomSelector } from '../../../hooks/store';
import { selectBreed } from '../../../store/selectors';
import { fetchBreed } from '../../../store/breed-slice/breed-slice';
import Loader from '../../../components/ui/loader/loader';
import { wrapper } from '../../../store';


const Index: NextPage = () => {
  const currentBreed = useCustomSelector(selectBreed).currentBreed;
  const isLoading = useCustomSelector(selectBreed).isLoading;

  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <Breadcrumbs marginBottom={20} />
        {isLoading ? <Loader /> : <BreedDesc breed={currentBreed} />}
      </Section>
    </GlobalLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store =>
  async ({query}) => {
    const breedId = query['breed-id'];
    if (breedId) await store.dispatch(fetchBreed(breedId));
    return {
      props: {},
    };
  });
