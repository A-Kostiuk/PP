import React, { FC } from 'react';
import Head from 'next/head';
import { Content } from './styled';
import { LeftColumn, Meow, RightColumn, Text, Title } from './styled';
import Logo from '../../ui/logo/logo';
import MainNav from '../../ui/main-nav/main-nav';

type Props = {
  children: React.ReactNode
  isHomePage?: boolean
};
const GlobalLayout: FC<Props> = ({children, isHomePage = false}) => {
  return (
    <>
      <Head>
        <title>PetProject</title>
      </Head>
      <Content>
        <LeftColumn $isHomePage={isHomePage}>
          <Logo />
          <Meow>Meow!</Meow>
          <Title>Welcome to PetProject</Title>
          <Text>Let`&apos;s start</Text>
          <MainNav />
        </LeftColumn>
        <RightColumn $isHomePage={isHomePage}>
          {children}
        </RightColumn>
      </Content>
    </>
  );
};

export default GlobalLayout;
