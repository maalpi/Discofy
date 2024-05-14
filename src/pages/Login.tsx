import React from 'react';
import { Credentials } from '../credentials/Credentials';

const Login: React.FC = () => {
  const CLIENT_ID = Credentials().ClientId;
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPES = [
    'user-read-recently-played',
    'user-top-read',
    'playlist-modify-private',
    'playlist-modify-public',
  ].join('%20'); // Os escopos devem ser separados por "%20" que é o código para espaço no URL

  return (
    <div className="App">
      <h1>Spotify CD</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
