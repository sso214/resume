import React from 'react';
import styled from 'styled-components';
import useData from '../../hooks/useData';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { StyledList } from '../../components/List';
import Mark from '../../components/Mark';

const StyledWorkList = styled(StyledList)`
  margin-top: 50px;
  border-left: 1px solid ${({ theme }) => theme.color.main};

  h4 {
    margin: 20px 0 10px 0;
  }

  & > li {
    position: relative;
    padding-left: 40px;
    margin-bottom: 50px;

    &:before {
      content: '';
      position: absolute;
      top: 14px;
      left: -10px;

      display: block;
      width: 20px;
      height: 20px;

      border-radius: 50%;
      background: ${({ theme }) => theme.color.main};
      transition: background-color 0.2s ease-in-out;
    }

    &:hover:before {
      background: #c1e6ce;
    }

    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: -14px;

      display: block;
      width: 24px;
      height: 24px;

      border-radius: 50%;
      border: 2px dotted #7ac294;
      transition: all 0.2s ease-in-out;
    }

    &:hover:after {
      transform: rotate(360deg);
    }

    & > span {
      margin-bottom: 10px;
    }

    div span {
      background: transparent;
      border: 1px solid #999;
    }
  }
`;

const WorkExperience = () => {
  const { career } = useData();

  return (
    <Container>
      <Title heading='h2'>Work Experience</Title>
      {career.map(({ companyName, companyLink, position, period, description, projects }) => (
        <React.Fragment key={companyName}>
          <Title heading='h3'>{companyName}.</Title>
          <Title heading='h4'>{position}</Title>
          <Mark>{period}</Mark>
          <p dangerouslySetInnerHTML={{ __html: description }} />

          <StyledWorkList>
            {projects.map(({ name, period, description, details, techs }) => (
              <li key={name}>
                <Title heading='h3'>{name}</Title>
                <Mark>{period}</Mark>
                <Title heading='h4'>Description</Title>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <Title heading='h4'>What did I do</Title>
                <ul>
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
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
          </StyledWorkList>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default WorkExperience;
