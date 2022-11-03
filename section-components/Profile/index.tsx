import styled from 'styled-components';
import useData from '../../hooks/useData';
import Container from '../../components/Container';
import { Title } from '../../components/Title';

const StyledItem = styled.li`
  margin-bottom: 10px;
`;

const Profile = () => {
  const { profile } = useData();

  return (
    <Container>
      <Title heading='h2'>Profile</Title>
      <ol>
        {Object.entries(profile).map(([key, val]) => (
          <StyledItem key={key}>
            {key} : {val}
          </StyledItem>
        ))}
      </ol>
    </Container>
  );
};

export default Profile;
