import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 48px;
    margin-bottom: 1%;
    font-family: 'Roboto';
    font-weight: 500;
  }

  p {
    width: 50%;
    text-indent: justify;
    text-align: center;
    font-size: 17px;
    color: #121212;
    font-weight: 300;
    font-family: 'Roboto';
  }

  a {
    text-decoration: none;
    color: blue;
  }

  @media (max-width: 1024px) {
    margin-top: 13%;
    margin-bottom: 5%;
  }

  @media (max-width: 440px) {
    height: 160%;
    text-align: center;
  }

  @media (max-width: 400px) {
    height: 190%;
    text-align: center;
  }

  @media (max-width: 380px) {
    height: 240%;
    text-align: center;
  }
`;
