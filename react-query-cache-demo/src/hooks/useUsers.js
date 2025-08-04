import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/userApi';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5000,      // fresh for 5s
    cacheTime: 60000,     // stays in cache for 1 min
  });
};
