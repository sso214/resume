import React from 'react';
import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Mark from '../../components/Mark';
import * as S from './style';

const Career = () => {
  const { career } = useData();

  return (
    <Container>
      <Title heading='h2'>Work Experience</Title>
      {career.map(({ companyName, position, period, description, projects }) => (
        <React.Fragment key={companyName}>
          <Title heading='h3'>{companyName}.</Title>
          <Title heading='h4'>{position}</Title>
          <Mark>{period}</Mark>
          <p dangerouslySetInnerHTML={{ __html: description }} />

          <S.CareerList>
            {projects.map(({ name, period, description, details, techs }) => (
              <li key={name}>
                <Title heading='h3'>{name}</Title>
                <Mark>{period}</Mark>

                <Title heading='h4'>Description</Title>
                <p dangerouslySetInnerHTML={{ __html: description }} />

                <Title heading='h4'>What did I do</Title>
                <ul>
                  {details.map((detail) => (
                    <li key={detail} dangerouslySetInnerHTML={{ __html: detail }} />
                  ))}
                </ul>

                <Title heading='h4'>Tech Stack</Title>
                <div>
                  {techs.map((tech) => (
                    <Mark key={tech}>{tech}</Mark>
                  ))}
                </div>
              </li>
            ))}
          </S.CareerList>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Career;
