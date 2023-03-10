import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import GlobalLayout from '../../../components/layouts/global-layout/global-layout';
import Menu from '../../../components/blocks/menu/menu';
import { Section } from '../../../components/styled';
import Breadcrumbs from '../../../components/ui/breadcrumbs/breadcrumbs';
import BreedDesc from '../../../components/blocks/breed-desc/breed-desc';
import theCatApi from '../../../axios/the-cat-api';
import { Breed } from '../../../interfaces/breed';
import Head from 'next/head';

interface BreedPageProps {
  currentBreed: Breed | null;
}


const Index: NextPage<BreedPageProps> = ({currentBreed}) => {
  return (
    <GlobalLayout>
      <Head>
        <title>{currentBreed?.name}</title>
      </Head>
      <Menu />
      <Section>
        <Breadcrumbs marginBottom={20} />
        <BreedDesc breed={currentBreed} />
      </Section>
    </GlobalLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<BreedPageProps> = async ({query}) => {
  const breedId = query?.['breed-id'];
  let currentBreed;
  if (breedId) {
    const reqBreed = await theCatApi.breed.fetchBreed(breedId);
    const reqImg = await theCatApi.breed.fetchBreedImages(breedId);
    if (reqBreed.data.id) currentBreed = {...reqBreed.data, images: reqImg.data};
  }
  return {
    props: {currentBreed},
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await theCatApi.breeds.fetchAllBreeds();
//     const paths = res.data.map((breedId) => ({params: {'breed-id': breedId.id}}));
//     return {paths, fallback: 'blocking'};
//   }
// ;
//
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const breedId = ctx.params?.['breed-id'];
//   if (breedId) {
//     const reqBreed = await theCatApi.breed.fetchBreed(breedId);
//     const reqImg = await theCatApi.breed.fetchBreedImages(breedId);
//     const currentBreed = {...reqBreed.data, images: reqImg.data};
//     return {
//       props: {
//         currentBreed,
//       },
//     };
//   }
//
//   return {
//     props: {},
//   };
// };
