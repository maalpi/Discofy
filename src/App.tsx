import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Callback from './pages/Callback';
import TopArtists from './pages/TopArtists';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top-artists" element={<TopArtists />} />
      </Routes>
    </Router>
  );
};

export default App;
