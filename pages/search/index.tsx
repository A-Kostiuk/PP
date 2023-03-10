import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { BreedResponse } from '../../interfaces/breed';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import theCatApi from '../../axios/the-cat-api';
import SearchContent from '../../components/layouts/search-content/search-content';
import { wrapper } from '../../store';
import { setSearchValue } from '../../store/search-slice/search-slice';
import Head from 'next/head';

interface SearchPageProps {
  breeds: BreedResponse[] | null;
}

const Value: NextPage<SearchPageProps> = ({breeds}) => {
  return (
    <GlobalLayout>
      <Head>
        <title>Search</title>
      </Head>
      <Menu />
      <Section>
        <SearchContent breeds={breeds} />
      </Section>
    </GlobalLayout>
  );
};

export default Value;

export const getServerSideProps: GetServerSideProps<SearchPageProps> = wrapper.getServerSideProps(
  store => async ({query}) => {
    const searchValue = query.q as string;
    await store.dispatch(setSearchValue(searchValue));
    const res = await theCatApi.breeds.fetchAllBreeds();
    const allBreeds = res.data;

    const breeds: BreedResponse[] = allBreeds.filter(breed => {
      return breed.name.toLowerCase().includes(searchValue.toString());
    });

    return {props: {breeds}};
  });
