import { setAxiosConfig } from '@/services';
import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export interface Auth {
  accessToken?: string;
  exp?: number;
}

const authState = atom<Auth | undefined | null>({
  key: 'AuthState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  function setAccessToken(accessToken: string) {
    if (!accessToken) {
      setAuth(null);
      return;
    }

    setAxiosConfig({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setAuth({
      accessToken,
    });
  }

  useEffect(() => {
    if (!auth?.accessToken) {
      return;
    }

    setAxiosConfig({
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    });
  }, [auth]);

  return {
    auth,
    setAccessToken,
  };
};
