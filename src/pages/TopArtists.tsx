import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Artist {
  id: string;
  name: string;
}

const TopArtists: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!window.localStorage.getItem('token');

  if (!isAuthenticated) {
    navigate('/');
  }

  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const token = window.localStorage.getItem('token');
  const [timeRange, setTimeRange] = useState<string>('short_term');

  const logout = () => {
    window.localStorage.removeItem('token');
    navigate('/');
  };
  useEffect(() => {
    if (token) {
      fetch(
        `https://api.spotify.com/v1/me/top/artists?limit=10&time_range=${timeRange}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          setTopArtists(data.items);
        })
        .catch((error) => console.error('Error fetching top artists:', error));
    }
  }, [token, timeRange]);

  return (
    <div>
      <h2>Top 10 Artists</h2>
      <div>
        <button onClick={() => setTimeRange('short_term')}>Ultimo mes</button>
        <button onClick={() => setTimeRange('medium_term')}>
          Last 6 Months
        </button>
        <button onClick={() => setTimeRange('long_term')}>Ultimo ano</button>
      </div>
      <ul>
        {topArtists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default TopArtists;
