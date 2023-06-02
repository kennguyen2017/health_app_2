import { AuthService, LoginRequestDto } from '@/services/auth.service';
import { useRequest } from 'ahooks';
import { useAuth } from './useAuth';

export const useLogin = () => {
  const { setAccessToken } = useAuth();
  const { runAsync, error } = useRequest(AuthService.login, {
    manual: true,
  });

  const login = (loginDto: LoginRequestDto) => {
    runAsync(loginDto).then((result) => {
      setAccessToken(result.accessToken);
    });
  };

  return {
    error,
    login,
  };
};
