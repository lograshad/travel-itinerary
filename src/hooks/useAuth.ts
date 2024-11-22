import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    console.log('Logging in:', email);
    setIsAuthenticated(true);
    navigate('/');
  };

  const handleRegister = async (email: string, password: string) => {
    console.log('Registering:', email);
    setIsAuthenticated(true);
    navigate('/');
  };

  return {
    isAuthenticated,
    handleLogin,
    handleRegister
  };
};