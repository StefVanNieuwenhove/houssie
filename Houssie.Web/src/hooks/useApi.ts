import { useQuery, useMutation } from '@tanstack/react-query';
import { ApiGet, ApiPut } from '@/lib/api';
import type { ApiResponse } from '@/lib/types';
import { toast } from 'sonner';

export const useApiGet = <T>(key: string, url: string) => {
  return useQuery<ApiResponse<T>>({
    queryKey: [key, url],
    queryFn: () => ApiGet<T>(url),
  });
};

export const useApiPut = <TRequest, TResponse>(url: string) => {
  return useMutation<ApiResponse<TResponse>, unknown, TRequest>({
    mutationFn: (body: TRequest) => ApiPut<TRequest, TResponse>(url, body),
    onSuccess: () => {
      toast.success('Task updated successfully');
    },
    onError: () => {
      toast.error('An error occurred while updating task');
    },
  });
};
