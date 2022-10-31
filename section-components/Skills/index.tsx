import styled from 'styled-components';
import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';

const StyledSkillsTitle = styled(Title)`
  margin-top: 40px;
`;

const Skills = () => {
  const { skills } = useData();

  return (
    <Container>
      <Title heading='h2'>Skills</Title>
      <ul>
        {skills.map(({ title, details }) => (
          <li key={title}>
            <StyledSkillsTitle heading='h3'>{title}</StyledSkillsTitle>
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