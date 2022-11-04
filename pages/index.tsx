import type { NextPage } from 'next';
import About from '../section-components/About';
import Profile from '../section-components/Profile';
import Career from '../section-components/Career';
import Education from '../section-components/Education';
import Skills from '../section-components/Skills';
import Footer from '../section-components/Footer';
import * as S from '../styles/theme';

const Home: NextPage = () => {
  return (
    <S.WrapContainer>
      <S.ContentsContainer>
        <About />
        <Profile />
        <Career />
        <Education />
        <Skills />
      </S.ContentsContainer>
      <Footer />
    </S.WrapContainer>
  );
};

export default Home;
