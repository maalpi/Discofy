import styled from 'styled-components';
import CDDark from '../../images/BASE2.svg'; // Importe a imagem se necessário
import MilkerFont from '../../images/Milker.otf';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #212121;
  z-index: -1;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  h1 {
    font-size: 3vw;
  }

  .opc {
    font-size: 1.5vw;
    margin: 1vw 0vw 0.3vw 0vw;
  }
  button {
    text-decoration: none;
    position: relative;
    margin: 2% 3% 2% 0%;
    align-items: center;
    gap: 5px;
    padding: 12px 32px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: purple;
    box-shadow: 0 0 0 2px purple;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #fff;
    background-color: purple;
    border-radius: 12px;
  }

  button:active {
    scale: 0.95;
    color: #fff;
    background-color: purple;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .active {
    color: #fff;
    background-color: purple;
  }

  .child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    flex: 1;

    margin: 10px;
  }

  .right {
    padding: 5% 0% 0% 3%;
    align-items: self-start;
    justify-content: left;
  }
  .child:first-child {
    margin-right: 20px;
  }

  .tempos {
    width: 75%;
  }

  .input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 0.8vw;
    color: #fff;
    background-color: rgb(28, 28, 30);
    box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
    border-radius: 0.4vw;
    border: none;
    outline: none;
    padding: 0.4vw;
    max-width: 190px;
    transition: 0.4s;
  }

  .input:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  .input:focus {
    box-shadow: 0 0 0 0.15vw skyblue;
  }

  @media (max-width: 1024px) {
    height: 120%;
    margin-top: 9.1%;
    margin-bottom: 5%;
    flex-direction: column;
    h1 {
      font-size: 5vw;
    }
    .opc {
      font-size: 4vw;
      margin: 2vw 0vw 0.8vw 0vw;
    }
    .input {
      padding: 4vw;
      font-size: 4vw;
    }
  }

  @media (max-width: 704px) {
    margin-top: 20%;
    height: 100%;
    margin-bottom: 5%;
  }

  @media (max-width: 380px) {
    height: 140%;
  }
`;

export const ContainerCD = styled.div`
  @font-face {
    font-family: 'Milker';
    src: url(${MilkerFont}) format('opentype');
  }
  min-width: 61vh;
  min-height: 52vh;
  max-width: 80vw;
  max-height: 80vh;
  background-image: url(${CDDark});
  background-size: cover;
  background-position: center;
  position: relative;

  h1 {
    position: absolute;
    top: 4%;
    left: 16%;
    font-family: 'IntegralCFBOLD';
    font-style: italic;
    font-size: 2.7vw;
    width: 410px;
    height: 60px;
    margin: 0;
  }

  ul {
    position: absolute;
    text-align: left;
    top: 35%;
    left: 20%;
    list-style-type: decimal-leading-zero;
    color: #ff3833;
    font-size: 0.8vw;
    font-weight: 650;
    margin: 0;
    font-family: 'IntegralCF', sans-serif;
    text-indent: justify;
  }

  #musica {
    font-family: 'Milker', sans-serif;
  }

  h2 {
    margin: -1vw 0vw 0.3vw -1.45vw;
    color: #fff;
    font-weight: 400;
    font-family: 'Milker', sans-serif;
  }

  #oficial {
    margin: 0.2vw 0vw 0.3vw -1.45vw;
    color: #fff;
    font-family: 'IntegralCF';
  }

  span {
    color: #ff3833;
    font-family: 'IntegralCF';
  }
  .TimeRight {
    top: 0%;
    right: 50%;
    transform: translate(40%, 10vw) rotate(270deg);
    color: #ff3833;
    font-weight: 850;
    font-size: 2.5vw;
    text-align: center;
    font-family: 'Milker', sans-serif;
  }

  @media (max-width: 1600px) {
    h1 {
      top: 2%;
      width: 190px;
    }
    .TimeRight {
      transform: translate(40%, 9.5vw) rotate(270deg);
    }
    h2 {
      margin-top: -1.5vw;
    }
  }

  @media (max-width: 1024px) {
    min-width: 87vw;
    min-height: 78vw;
    max-width: 35vw;
    max-height: 35vw;

    ul {
      top: 30%;
      font-size: 2.45vw;
    }

    h2 {
      margin: 0vw 0vw 1vw -4vw;
    }

    h1 {
      width: 54vw;
      height: 22vw;
      font-size: 7vw;
    }
    .TimeRight {
      font-size: 6.5vw;
      transform: translate(40%, 31vw) rotate(270deg);
    }
  }

  @media (max-width: 767px) {
    min-width: 75vw;
    min-height: 65vw;
    max-width: 35vw;
    max-height: 35vw;

    ul {
      top: 30%;
      font-size: 2vw;
    }

    h2 {
      margin: 0vw 0vw 1vw -4vw;
    }

    #oficial {
      margin: 0.2vw 0vw 0.3vw -3.45vw;
      color: #fff;
      font-family: 'IntegralCF';
    }

    h1 {
      width: 200px;
      height: 60px;
    }
    .TimeRight {
      font-size: 6.5vw;
      transform: translate(40%, 26vw) rotate(270deg);
    }
  }
`;
