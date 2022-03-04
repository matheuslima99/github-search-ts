import * as C from './styles';
import { useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { UserInfo } from './components/UserInfo';

export const Profile = () => {
  const params = useParams();

  return (
    <C.Container>
      <Header />
      <UserInfo />
    </C.Container>
  );
};
