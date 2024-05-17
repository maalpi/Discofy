import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerStyled, ContainerCD } from './styled';
import Navbar from '../../components/Header/Nav';
import { toPng } from 'html-to-image';

import CDDark from '../../images/versoCDDARK.svg';

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
        link.download = 'my-image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <ContainerStyled>
        <div className="child">
          <ContainerCD ref={printRef}>
            <h1>{userName}</h1>
            <ul>
              <h2>SONGS</h2>
              {topTracks.map((track) => (
                <li key={track.id}>{track.name}</li>
              ))}
            </ul>
            {isVisible && (
              <div className="TimeRight">
                <p>{time}</p>
              </div>
            )}
          </ContainerCD>
          <button onClick={handleDownloadImage}>Download as PNG</button>
        </div>
        <div className="child right">
          <h1>Customize</h1>
          <p>inclua os artista de:</p>
          <div className="tempos">
            <button
              onClick={() => handleButtonClick('short_term')}
              className={activeButton === 'short_term' ? 'active' : ''}
            >
              1 Month
            </button>
            <button
              onClick={() => handleButtonClick('medium_term')}
              className={activeButton === 'medium_term' ? 'active' : ''}
            >
              6 Months
            </button>
            <button
              onClick={() => handleButtonClick('long_term')}
              className={activeButton === 'long_term' ? 'active' : ''}
            >
              12 Months
            </button>
          </div>
          <p>escolha um tema:</p>
          <div className="tempos">
            <button>Futuristic</button>
            <button>Retro</button>
            <button>Modern</button>
          </div>
          <p>nome do disco:</p>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </ContainerStyled>
    </>
  );
};

export default TopArtists;
