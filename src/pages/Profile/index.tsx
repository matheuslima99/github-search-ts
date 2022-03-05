import * as C from './styles';
import { useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { UserInfo } from './components/UserInfo';
import { ReposCard } from './components/ReposCard';
import { useRequest } from '../../hooks/useRequest';

type User = {
  login: string;
};

export const Profile = () => {
  const { data: user } = useRequest<User>('users/matheuslima99');

  console.log(user);

  return (
    <C.Container>
      <Header />
      <UserInfo />
      <C.ReposArea>
        {/* {repositories?.map((item, index) => (
          <ReposCard key={index} />
        ))} */}
      </C.ReposArea>
    </C.Container>
  );
};
