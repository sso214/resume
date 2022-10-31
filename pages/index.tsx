import type { NextPage } from 'next';
import styled from 'styled-components';
import About from '../components/About';
import Profile from '../components/Profile';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Container = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
`;

const Home: NextPage = () => {
  return (
    <Container>
      <About />
      <Profile />
      <WorkExperience />
      <Education />
      <Skills />
      <Footer />
    </Container>
  );
};

export default Home;
