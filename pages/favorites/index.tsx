import { NextPage } from 'next';
import React, { useEffect } from 'react';

import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import PhotosPattern from '../../components/layouts/photos-pattern/photos-pattern';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectFavorites } from '../../store/selectors';
import Image from '../../components/ui/image/image';
import { fetchFavoritesImages } from '../../store/favourites-slice/favourites-slice';
import NoItem from '../../components/ui/no-item/no-item';


const Index: NextPage = () => {
  const dispatch = useCustomDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesImages());
  }, [dispatch]);


  const images = useCustomSelector(selectFavorites).images;
  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <Breadcrumbs marginBottom={20} />
        {images.length > 0 ?
          <PhotosPattern>
            {images.map((image, index) => <Image index={index} key={image.image.id}
                                                 isFavorite={image.isFavorite} {...image.image}
                                                 favoriteId={image.id} type={'favorites'} />)}
          </PhotosPattern>
          : <NoItem />}
      </Section>
    </GlobalLayout>
  );
};

export default Index;
