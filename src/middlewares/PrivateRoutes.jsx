import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { isLogged, initComplete } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged && initComplete) {
      navigate('/login');
    }
  }, [initComplete]);

  return <div>{initComplete && children}</div>;
};

export default PrivateRoutes;
