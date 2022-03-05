import * as C from './styles';
import { useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { UserInfo } from './components/UserInfo';
import { ReposCard } from './components/ReposCard';
import { useState } from 'react';

export const Profile = () => {
  const params = useParams();

  const [repositories, setRepositories] = useState([
    { key: 1 },
    { key: 1 },
    { key: 1 },
  ]);

  return (
    <C.Container>
      <Header />
      <UserInfo />
      <C.ReposArea>
        {repositories.map((item, index) => (
          <ReposCard key={index} />
        ))}
      </C.ReposArea>
    </C.Container>
  );
};
