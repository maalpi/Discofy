import React from 'react';
import Navbar from '../../components/Header/Nav';
import { ContainerStyled } from './styled';

const Contato: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <h1>Contact-me</h1>
        <p>
          For any questions or suggestions, please contact me at
          <a href="mailto:pierremateus81@gmail.com" target="blanked">
            {' '}
            pierremateus81@gmail.com
          </a>
          , or send me a message on{' '}
          <a
            href="https://www.linkedin.com/in/mateus-pierre-96799218a/"
            target="blanked"
          >
            {' '}
            linkedin{' '}
          </a>
          or{' '}
          <a href="https://www.instagram.com/mateus_pierre_/" target="blanked">
            {' '}
            instagram{' '}
          </a>
          ! To check out other projects and more about me, visit my{' '}
          <a href="http://mateuspierre.tech/" target="blanked">
            website
          </a>
          .
        </p>
        <br />
        <br />
        <p>
          Made by{' '}
          <a href="http://mateuspierre.tech/" target="blanked">
            Mateus Pierre
          </a>
        </p>
      </ContainerStyled>
    </>
  );
};

export default Contato;
