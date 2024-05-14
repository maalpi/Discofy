import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token =
        hash
          .substring(1)
          .split('&')
          .find((elem) => elem.startsWith('access_token'))
          ?.split('=')[1] || null;

      window.location.hash = '';
      if (token) {
        window.localStorage.setItem('token', token);
      }
    }

    if (token) {
      navigate('/top-artists');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return null;
};

export default Callback;
