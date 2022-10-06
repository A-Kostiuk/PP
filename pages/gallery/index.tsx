import React, { FC } from 'react';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import UploadButton from '../../components/ui/upload-button/upload-button';
import { Container } from './styled';
import GalleryControlPanel from '../../components/layouts/gallery-control-panel/gallery-control-panel';
import useDarkMode from 'use-dark-mode';

interface Props {

}

const Index: FC<Props> = (props) => {
  const darkMode = useDarkMode();
  const handleButtonClick = () => {
    darkMode.toggle();
  };
  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <Container>
          <Breadcrumbs />
          <UploadButton />
        </Container>
        <GalleryControlPanel />
        <button onClick={handleButtonClick}>Toggle theme</button>
        <p>{darkMode.value}</p>
      </Section>
    </GlobalLayout>
  );
};

export default Index;
