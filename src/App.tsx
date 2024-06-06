import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Callback from './pages/Callback';
import TopArtists from './pages/TopArtists/TopArtists';
import PoliticaPrivacidade from './pages/Privacidade/Politica';
import Contato from './pages/Contato/Contato';
import { createGlobalStyle } from 'styled-components';
import './styles/fonts.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Milker';
    src: url('./images/Milker.otf') format('opentype');
  }
`;
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/privacy" element={<PoliticaPrivacidade />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
