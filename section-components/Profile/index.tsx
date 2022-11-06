import useData from '../../hooks/useData';
import Container from '../../components/Container';
import Title from '../../components/Title';
import * as S from './style';

const Profile = () => {
  const {
    profile: { info, channel },
  } = useData();

  return (
    <Container>
      <Title heading='h2'>Profile</Title>
      <ol>
        {Object.entries(info).map(([key, val]) => (
          <S.Item key={key}>
            {key} : {val}
          </S.Item>
        ))}

        {Object.entries(channel).map(([key, val]) => (
          <S.Item key={key}>
            {key} :{' '}
            <a href={val} target='_blank'>
              {val}
            </a>
          </S.Item>
        ))}
      </ol>
    </Container>
  );
};

export default Profile;
