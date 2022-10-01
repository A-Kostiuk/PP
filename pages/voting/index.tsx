import React, { FC } from 'react';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import VotingWindow from '../../components/layouts/voting-window/voting-window';
import VotingLogsList from '../../components/layouts/voting-logs-list/voting-logs-list';


const Index: FC = () => {
  return (
    <GlobalLayout>
      <Menu />
      <Section>
        <Breadcrumbs marginBottom={20} />
        <VotingWindow />
        <VotingLogsList />
      </Section>
    </GlobalLayout>
  );
};

export default Index;
