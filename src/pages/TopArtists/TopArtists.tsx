import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerStyled, ContainerCD } from './styled';
import Navbar from '../../components/Header/Nav';
import { toPng } from 'html-to-image';

interface Artist {
  id: string;
  name: string;
}

interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: {
    images: { url: string }[];
  };
}

const TopArtists: React.FC = () => {
  const obj = new Date();
  const navigate = useNavigate();
  const isAuthenticated = !!window.localStorage.getItem('token');
  const printRef = useRef<HTMLDivElement>(null);

  if (!isAuthenticated) {
    navigate('/');
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const token = window.localStorage.getItem('token');
  const [time, setTime] = useState<string>('LAST MONTH');
  const [timeRange, setTimeRange] = useState<string>('short_term');
  const [activeButton, setActiveButton] = useState<string>('short_term');

  useEffect(() => {
    if (token) {
      fetch(
        `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${timeRange}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          setTopTracks(data.items);

          // Extraindo artistas únicos das faixas
          const artistMap = new Map<string, Artist>();
          data.items.forEach((track: Track) => {
            track.artists.forEach((artist: Artist) => {
              if (!artistMap.has(artist.id)) {
                artistMap.set(artist.id, artist);
              }
            });
          });

          setTopArtists(Array.from(artistMap.values()));
        })
        .catch((error) => console.error('Error fetching top artists:', error));
    }

    // Fetch user profile
    fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.display_name || '');
        setUser(data.display_name || '');
      })
      .catch((error) => console.error('Error fetching user profile:', error));
  }, [token, timeRange]);

  const handleButtonClick = (range: string) => {
    if (range === 'short_term') {
      setTime('LAST MONTH');
    } else if (range === 'medium_term') {
      setTime('SIX MONTHS');
    } else {
      setTime('LAST YEAR');
    }
    setTimeRange(range);
    setActiveButton(range);
  };

  const handleDownloadImage = () => {
    if (printRef.current === null) {
      return;
    }

    toPng(printRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'myCD.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveOnSpotify = async () => {
    if (!token) return;

    try {
      // Step 1: Create a new playlist
      const createPlaylistResponse = await fetch(
        `https://api.spotify.com/v1/me/playlists`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${time.toLowerCase()} top tracks - ${obj
              .toLocaleString('en-US', { month: 'short' })
              .toLowerCase()} ${obj.getFullYear()}`,
            description: 'created by Discofy - (discofy.netlify.app)',
            public: false,
          }),
        },
      );

      const createPlaylistData = await createPlaylistResponse.json();
      const playlistId = createPlaylistData.id;

      // Step 2: Add tracks to the new playlist
      const trackUris = topTracks.map((track) => `spotify:track:${track.id}`);

      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uris: trackUris,
        }),
      });

      // Step 3: Open the playlist in a new tab
      const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`;
      window.open(playlistUrl, '_blank');
    } catch (error) {
      console.error('Error saving playlist on Spotify:', error);
    }
  };

  return (
    <>
      <Navbar />
      <ContainerStyled>
        <div className="child">
          <ContainerCD ref={printRef} id="cd">
            <h1>{userName}</h1>
            <ul>
              <h2>SONGS</h2>
              {topTracks.map((track, index) => (
                <li key={track.id}>
                  <span id="musica">{`"${track.name
                    .replace(/\s*\([^)]*\)|\-.*/g, '')

                    .toUpperCase()}"`}</span>
                </li>
              ))}
              <p id="oficial">
                OFICIAL SOUNDTRACK BY <span>{user}</span>
              </p>
            </ul>
            {isVisible && (
              <div className="TimeRight">
                <p>{time}</p>
              </div>
            )}
          </ContainerCD>
          <button className="btn" onClick={handleDownloadImage}>
            Download Image
          </button>
          <button className="btn" onClick={handleSaveOnSpotify}>
            Save in Spotify
          </button>
        </div>
        <div className="child right">
          <h1>CUSTOMIZE</h1>
          <p className="opc">TIME PERIOD :</p>
          <div className="tempos">
            <button
              onClick={() => handleButtonClick('short_term')}
              className={`button1 ${
                activeButton === 'short_term' ? 'active' : ''
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => handleButtonClick('medium_term')}
              className={`button1 ${
                activeButton === 'medium_term' ? 'active' : ''
              }`}
            >
              6 Months
            </button>
            <button
              onClick={() => handleButtonClick('long_term')}
              className={`button1 ${
                activeButton === 'long_term' ? 'active' : ''
              }`}
            >
              12 Months
            </button>
          </div>
          <p className="opc">
            THEME <span id="breve">(EM BREVE)</span> :
          </p>
          <div className="tempos">
            <button className="button1">Futuristic</button>
            <button className="button1">Retro</button>
            <button className="button1">Modern</button>
          </div>
          <p className="opc">CD NAME :</p>
          <input
            className="input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </ContainerStyled>
    </>
  );
};

export default TopArtists;
