import styled from 'styled-components';
import CDDark from '../../images/versoCDDARK.svg'; // Importe a imagem se necessário
import MilkerFont from '../../images/Milker.otf';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #121212;
  color: #fff;

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
    border: 2px solid blueviolet;
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

  @media (max-width: 1024px) {
    margin-top: 25%;
    margin-bottom: 5%;
    flex-direction: column;
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
    top: 7%;
    left: 16%;
    font-size: 235%;
    width: 410px;
    height: 60px;
    margin: 0;
  }

  ul {
    position: absolute;
    text-align: left;
    top: 35%;
    left: 20%;
    list-style-type: decimal;
    color: red;
    font-size: 82%;
    margin: 0;
  }

  h2 {
    margin: 0% 0% 1% -8%;
    color: #fff;
    font-weight: 400;
    font-family: 'Milker';
  }

  .TimeRight {
    top: 0%;
    right: 50%;
    transform: translate(40%, 105%) rotate(270deg);
    color: red;
    font-weight: 850;
    font-size: 265%;
    text-align: left;
  }

  @media (max-width: 1600px) {
    .TimeRight {
      font-size: 375%;
      transform: translate(40%, 125%) rotate(270deg);
    }
  }

  @media (max-width: 767px) {
    min-width: 87vw;
    min-height: 78vw;
    max-width: 35vw;
    max-height: 35vw;

    ul {
      font-family: 'Roboto';
      top: 30%;
      font-size: 12px;
    }

    h2 {
      margin: 0% 0% 1% -8.5%;
      font-family: 'Roboto';
    }

    h1 {
      width: 200px;
      height: 60px;
      font-size: 30px;
    }
    .TimeRight {
      font-size: 175%;
      transform: translate(40%, 125%) rotate(270deg);
    }
  }
`;
