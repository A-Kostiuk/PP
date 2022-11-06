import { GetServerSideProps, NextPage, NextPageContext } from 'next';
import React from 'react';

import { fetchPicture } from '../../store/voting-slice/voting-slice';
import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import { Section } from '../../components/styled';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import VotingWindow from '../../components/layouts/voting-window/voting-window';
import VotingLogsList from '../../components/layouts/voting-logs-list/voting-logs-list';
import { wrapper } from '../../store';


const Index: NextPage = () => {
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchPicture());
  return {
    props: {},
  };
});
