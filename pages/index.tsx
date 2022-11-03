import type { NextPage } from 'next';
import styled from 'styled-components';
import About from '../section-components/About';
import Profile from '../section-components/Profile';
import WorkExperience from '../section-components/WorkExperience';
import Education from '../section-components/Education';
import Skills from '../section-components/Skills';
import Footer from '../section-components/Footer';

const Container = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};

  a {
    color: ${({ theme }) => theme.color.main};
    &:hover {
      color: ${({ theme }) => theme.color.main};
    }
  }
`;

const ContentsContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  font-size: 16px;
  line-height: 1.8;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <ContentsContainer>
        <About />
        <Profile />
        <WorkExperience />
        <Education />
        <Skills />
      </ContentsContainer>
      <Footer />
    </Container>
  );
};

export default Home;
