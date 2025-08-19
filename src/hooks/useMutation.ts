import { useState } from 'react';

interface MutationProps<K, T, E> {
  mutationFn: (data: K) => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: E) => void;
}

export function useMutation<K, T = unknown, E = unknown>({
  mutationFn,
  onError,
  onSuccess,
}: MutationProps<K, T, E>) {
  const [fetch, setFetch] = useState<{
    isLoading: boolean;
    data?: T;
    isError: boolean;
    error: string;
  }>({ isError: false, isLoading: false, error: '' });

  const mutate = async (props?: K) => {
    setFetch({ isLoading: true, isError: false, error: '', data: undefined });
    try {
      const data = await mutationFn(props as K);
      setFetch({ isLoading: false, data, isError: false, error: '' });
      onSuccess?.(data);
    } catch (error: unknown) {
      setFetch({ isLoading: false, isError: true, error: String(error) });
      onError?.(error as E);
    }
  };

  return {
    ...fetch,
    mutate,
  };
}
