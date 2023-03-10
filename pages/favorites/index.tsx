import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import PhotosPattern from '../../components/layouts/photos-pattern/photos-pattern';
import { useCustomSelector } from '../../hooks/store';
import { selectFavorites } from '../../store/selectors';
import CustomImageItem from '../../components/ui/custom-image-item/custom-image-item';
import { fetchFavoritesImages } from '../../store/favorites-slice/favorites-slice';
import NoItem from '../../components/ui/no-item/no-item';
import { wrapper } from '../../store';
import Head from 'next/head';


const Index: NextPage = () => {
  const {images} = useCustomSelector(selectFavorites);

  return (
    <GlobalLayout>
      <Head>
        <title>Favorites</title>
      </Head>
      <Menu />
      <Section>
        <Breadcrumbs marginBottom={20} />
        {images.length > 0 ?
          <PhotosPattern>
            {images.map((image, index) => <CustomImageItem index={index} key={image.image.id}
                                                           isFavorite={image.isFavorite} {...image.image}
                                                           favoriteId={image.id} type={'favorites'} />)}
          </PhotosPattern>
          : <NoItem />}
      </Section>
    </GlobalLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchFavoritesImages());
  return {
    props: {},
  };
});
