import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Li, Section } from '../../components/styled';
import { VotingImage } from '../../interfaces/image';
import theCatApi from '../../axios/the-cat-api';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import PhotosPattern from '../../components/layouts/photos-pattern/photos-pattern';
import { PhotoItem } from '../../components/ui/photo-item/photo-item';

interface DislikesPageProps {
  images: VotingImage[];
}

const Index: NextPage<DislikesPageProps> = ({images}) => {
  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <Breadcrumbs marginBottom={20} />
        <PhotosPattern>
          {images && images.map(image => <PhotoItem key={image.image_id}>
            <Image src={image.image.url} alt={''} layout={'fill'} />
          </PhotoItem>)}
        </PhotosPattern>
      </Section>
    </GlobalLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<DislikesPageProps> = async () => {
  const {data} = await theCatApi.voting.fetchVotingImages();
  const dislikesImages = data.filter((image) => image.value < 0);
  return {
    props: {images: dislikesImages},
  };
};
