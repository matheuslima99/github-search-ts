import styled, { keyframes } from 'styled-components';

const shake = keyframes`
    10%, 90%{
        transform: translate3d(-1px, 0, 0)
    }
    20%, 80%{
        transform: translate3d(2px, 0, 0)
    }
    30%, 50%, 70%{
        transform: translate3d(-4px, 0, 0)
    }
    40%, 60%{
        transform: translate3d(4px, 0, 0)
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    max-width: 300px;
    width: 100%;
    animation: ${shake} 1s;
  }
  h1 {
    color: ${props => props.theme.colors.text};
    margin: 15px 0px;
  }

  .link-button {
    color: ${props => props.theme.colors.textButton ?? props.theme.colors.text};
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    padding: 6px 12px;
    background: ${props => props.theme.colors.secondary};
    transition: transform 0.7s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 500px) {
    img {
      width: 70%;
    }
  }
  @media (max-width: 430px) {
    h1 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 350px) {
    h1 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 270px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;
