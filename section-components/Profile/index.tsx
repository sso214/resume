import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';
import * as S from './style';

const Profile = () => {
  const { profile } = useData();

  return (
    <Container>
      <Title heading='h2'>Profile</Title>
      <ol>
        {Object.entries(profile).map(([key, val]) => (
          <S.Item key={key}>
            {key} : {val}
          </S.Item>
        ))}
      </ol>
    </Container>
  );
};

export default Profile;
