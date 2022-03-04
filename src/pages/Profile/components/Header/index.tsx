import * as C from './styles';
import Logo from '../../../../assets/logo-horizontal.svg';
import { ImArrowLeft2 } from 'react-icons/im';
import { useTheme } from '../../../../context/Theme';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <C.Container>
      <C.Logo src={Logo} />
      <C.BackButton>
        <ImArrowLeft2 size={30} color={theme.colors.text} />
      </C.BackButton>
    </C.Container>
  );
};
