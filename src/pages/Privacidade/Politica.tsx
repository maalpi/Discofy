import React from 'react';
import Navbar from '../../components/Header/Nav';
import { ContainerStyled } from './styled';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        <h1>Politica de Privacidade</h1>
        <p>
          O Discofy foi desenvolvido como um aplicativo de código aberto
          desenvolvido pela API Spotify. Ao optar por usar este aplicativo, você
          concorda com o uso do nome de usuário e dos dados da sua conta Spotify
          para seus principais artistas e faixas.
        </p>
        <br />
        <p>
          Nenhum dos dados usado pelo Discofy é armazenado ou coletado em
          qualquer lugar e NÃO é compartilhado com terceiros. Todas as
          informações são usadas exclusivamente para exibir o seu CD.
        </p>
        <br />
        <p>
          Embora você possa ter certeza de que seus dados não estão sendo
          armazenados ou usados de forma maliciosa, se desejar revogar as
          permissões do Discofy, você pode visitar a página do seu aplicativo e
          clicar em REMOVER ACESSO no Discofy.
        </p>
        <br />
        <h1>Privacy Policy</h1>
        <p>
          Discofy was developed as an open source application Powered by the
          Spotify API. By choosing to use this application, you agree to the use
          of your Spotify username and account details for your top artists and
          tracks.
        </p>
        <br />
        <p>
          None of the data used by Discofy is stored or collected anywhere and
          is NOT shared with third parties. All information is used exclusively
          to display your CD.
        </p>
        <br />
        <p>
          While you can be sure that your data is not being stored or used
          maliciously, if you wish to revoke Discofy permissions, you can visit
          your app page and click REMOVE ACCESS in Discofy.
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

export default PoliticaPrivacidade;
