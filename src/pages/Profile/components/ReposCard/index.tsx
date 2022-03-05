import * as C from './styles';
import { BsFillStarFill, BsFileEarmarkCodeFill } from 'react-icons/bs';
import { RiShareBoxFill, RiStackshareLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';

export const ReposCard = () => {
  const { colors } = useTheme();

  return (
    <C.Container>
      <C.Wrapper>
        <C.Header>awesome-made-by-braszilians</C.Header>
        <C.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro
          est, quaerat, totam architecto possimus aperiam voluptates veniam
          ratione explicabo dolore rerum aliquam minima delectus earum itaque
          ipsam accusamus. Maxime?
        </C.Description>
      </C.Wrapper>

      <C.Footer>
        <C.Info>
          <BsFillStarFill color={colors.secondary} size={14} />
          <C.TextInfo>73</C.TextInfo>
        </C.Info>

        <C.Info>
          <RiStackshareLine color={colors.secondary} size={14} />
          <C.TextInfo>2</C.TextInfo>
        </C.Info>

        <C.Info>
          <BsFileEarmarkCodeFill color={colors.secondary} size={14} />
          <C.TextInfo>JavaScript</C.TextInfo>
        </C.Info>

        <C.Info>
          <a href='#'>
            <RiShareBoxFill color={colors.secondary} size={14} />
          </a>
        </C.Info>
      </C.Footer>
    </C.Container>
  );
};
