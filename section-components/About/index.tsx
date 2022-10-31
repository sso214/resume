import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';

const About = () => {
  const { about } = useData();

  return (
    <Container>
      <Title heading='h1'>{about.title}</Title>
      <p>{about.description}</p>
    </Container>
  );
};

export default About;
