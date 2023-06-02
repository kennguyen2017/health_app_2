/* eslint-disable react-hooks/exhaustive-deps */
import { atom, useRecoilState } from 'recoil';

const loadingState = atom<boolean>({
  key: 'LoadingState',
  default: false,
});

export const useLoading = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  return {
    isLoading,
    setIsLoading,
  };
};
