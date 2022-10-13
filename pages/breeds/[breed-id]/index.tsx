import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import GlobalLayout from '../../../components/layouts/global-layout/global-layout';
import Menu from '../../../components/blocks/menu/menu';
import { Section } from '../../../components/styled';
import Breadcrumbs from '../../../components/ui/breadcrumbs/breadcrumbs';
import BreedDesc from '../../../components/blocks/breed-desc/breed-desc';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectBreed } from '../../../store/selectors';
import { fetchBreed } from '../../../store/breed-slice/breed-slice';
import Loader from '../../../components/ui/loader/loader';

const Index: FC = () => {
  const dispatch = useCustomDispatch();
  const currentBreed = useCustomSelector(selectBreed).currentBreed;
  const isLoading = useCustomSelector(selectBreed).isLoading;
  const router = useRouter();
  const breedId = router.query['breed-id'];

  useEffect(() => {
    if (breedId) dispatch(fetchBreed(breedId));
  }, [breedId]);


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
