import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';
import * as S from './style';

const Skills = () => {
  const { skills } = useData();

  return (
    <Container>
      <Title heading='h2'>Skills</Title>
      <ul>
        {skills.map(({ title, details }) => (
          <li key={title}>
            <S.ItemTitle as='h3'>{title}</S.ItemTitle>
            <ol>
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Skills;
