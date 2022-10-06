import React, { FC, useEffect, useState } from 'react';
import GlobalLayout from '../../../components/layouts/global-layout/global-layout';
import Menu from '../../../components/blocks/menu/menu';
import { Section } from '../../../components/styled';
import Breadcrumbs from '../../../components/ui/breadcrumbs/breadcrumbs';
import { useRouter } from 'next/router';
import { Breed } from '../../../interfaces/breed';
import theCatApi from '../../../axios/the-cat-api';
import BreedDesc from '../../../components/blocks/breed-desc/breed-desc';

const Index: FC = () => {
  const [breed, setBreed] = useState<any>(null);
  const router = useRouter();
  const path = router.asPath.split('/');

  const getData = async () => {
    const breedId = path[path.length - 1];
    if (breedId !== '[breed-id]') {
      const res = await theCatApi.fetchBreed(breedId);
      return res.data[0];
    }
  };

  useEffect(() => {
    getData().then((data) => {
      setBreed(data);
    });
  }, [path]);


  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <Breadcrumbs />
        <BreedDesc breed={breed} />
      </Section>
    </GlobalLayout>
  );
};

export default Index;
