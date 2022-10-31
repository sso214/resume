import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';

const Education = () => {
  const { education } = useData();
  const { name, major, period, description } = education;

  return (
    <Container>
      <Title heading='h2'>Education</Title>
      <Title heading='h3'>
        {name} {major}
      </Title>
      <span>{period}</span>
      <p>{description}</p>
    </Container>
  );
};

export default Education;
