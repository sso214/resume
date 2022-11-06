import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MOBILE_WIDTH } from '../../styles/theme';

const About = () => {
  const { about } = useData();
  const isMobile = useMediaQuery(MOBILE_WIDTH);

  return (
    <Container>
      <Title heading='h1'>{isMobile ? about.title_mb : about.title_pc}</Title>
      <p>{isMobile ? about.description_mb : about.description_pc}</p>
    </Container>
  );
};

export default About;
