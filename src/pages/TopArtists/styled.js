import styled from 'styled-components';

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
`;
