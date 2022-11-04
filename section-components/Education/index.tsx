import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Mark from '../../components/Mark';

const Education = () => {
  const {
    education: { name, major, period, description },
  } = useData();

  return (
    <Container>
      <Title heading='h2'>Education</Title>
      <Title heading='h3'>
        {name} {major}
      </Title>
      <Mark>{period}</Mark>
      <p>{description}</p>
    </Container>
  );
};

export default Education;
