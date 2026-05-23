import { useQuery } from '@tanstack/react-query';
import { ApiGet } from '@/lib/api';
import type { ApiResponse } from '@/lib/types';

export const useApi = <T>(key: string, url: string) => {
  return useQuery<ApiResponse<T>>({
    queryKey: [key, url],
    queryFn: () => ApiGet<T>(url),
  });
};
