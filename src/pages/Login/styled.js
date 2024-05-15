import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #121212;

  h1 {
    font-family: 'Honk', sans-serif; /* Nome da fonte importada */
    font-size: 90px;
  }
  a {
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: greenyellow;
    box-shadow: 0 0 0 2px greenyellow;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }

  a:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    background-color: greenyellow;
    border-radius: 12px;
  }

  a:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }
`;
