import type { NextPage } from 'next';
import GlobalLayout from '../components/layouts/global-layout/global-layout';
import { Img } from '../pages-styles/main-page-styled';
import homeScreen from '../public/home-screen.png';

const Home: NextPage = () => {
  return (
    <GlobalLayout isHomePage={true}>
      <Img src={homeScreen.src} />
    </GlobalLayout>
  );
};

export default Home;
