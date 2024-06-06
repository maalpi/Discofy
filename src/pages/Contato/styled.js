import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;

  h1 {
    font-size: 48px;
    margin-bottom: 1%;
    font-family: 'Roboto';
    font-weight: 500;
    color: #fff;
  }

  p {
    width: 50%;
    text-indent: justify;
    text-align: center;
    font-size: 17px;
    color: #121212;
    font-weight: 300;
    font-family: 'Roboto';
    color: #fff;
  }

  a {
    text-align: center;
    text-indent: justify;
    text-decoration: none;
    color: blue;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 19px;
    }
  }

  @media (max-width: 440px) {
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    font-size: 12.5px;
  }

  @media (max-width: 380px) {
    p {
      font-size: 12.5px;
      text-align: center;
      text-justify: auto;
    }
  }
`;
