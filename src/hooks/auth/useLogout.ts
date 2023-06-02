import { useAuth } from './useAuth';

export const useLogout = () => {
  const { setAccessToken } = useAuth();

  const logout = () => {
    setAccessToken('');
  };

  return logout;
};
