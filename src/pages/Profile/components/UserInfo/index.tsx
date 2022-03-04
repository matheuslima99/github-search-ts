import * as C from './styles';
import { IoLocationSharp } from 'react-icons/io5';
import { RiStackshareLine } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { BsPeopleFill, BsPeople, BsFillStarFill } from 'react-icons/bs';
import { useTheme } from '../../../../context/Theme';

export const UserInfo = () => {
  const { theme } = useTheme();

  return (
    <C.Container>
      <C.Avatar src='https://avatars.githubusercontent.com/u/75329153?v=4' />
      <C.Wrapper>
        <C.Username>Matheus Lima</C.Username>
        <C.Social>@matheuslima99</C.Social>

        <C.TextInfoArea>
          <C.TextInfo>
            <IoLocationSharp color={theme.colors.secondary} size={20} />
            <C.Text>Alguma coisa</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <MdWork color={theme.colors.secondary} size={20} />
            <C.Text>Universidade Federal da paraiba</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <BsPeopleFill color={theme.colors.secondary} size={20} />
            <C.Text>4700</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <BsPeople color={theme.colors.secondary} size={20} />
            <C.Text>233</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <BsFillStarFill color={theme.colors.secondary} size={20} />
            <C.Text>30</C.Text>
          </C.TextInfo>
        </C.TextInfoArea>
      </C.Wrapper>

      <C.InfoReposArea>
        Total Respositories
        <C.TextReposArea>
          90
          <RiStackshareLine size={25} color={theme.colors.secondary} />
        </C.TextReposArea>
      </C.InfoReposArea>
    </C.Container>
  );
};
