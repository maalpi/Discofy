import React from 'react';
import { Credentials } from '../../credentials/Credentials';
import { ContainerStyled } from './styled';

const Login: React.FC = () => {
  const CLIENT_ID = Credentials().ClientId;
  const REDIRECT_URI = 'https://discofy.netlify.app/callback';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPES = [
    'user-read-recently-played',
    'user-top-read',
    'playlist-modify-private',
    'playlist-modify-public',
  ].join('%20'); // Os escopos devem ser separados por "%20" que é o código para espaço no URL

  window.localStorage.removeItem('token');
  return (
    <ContainerStyled>
      <h1>Disco.fy</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}
      >
        Login Spotify
      </a>
    </ContainerStyled>
  );
};

export default Login;
