import { ChangeEvent, useState } from 'react';
import * as C from './styles';
import Logo from '../../assets/logo-vertical.svg';
import { SwitchButton } from '../../components/Switch';

export const Home = () => {
  const [username, setUsername] = useState('');

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <C.Container>
      <C.Wrapper>
        <C.Logo src={Logo} alt='github logo' />
        <C.Input
          placeholder='Enter user name'
          value={username}
          onChange={handleChangeName}
        />
        <C.SearchButton>Search</C.SearchButton>
        <SwitchButton />
      </C.Wrapper>
    </C.Container>
  );
};
