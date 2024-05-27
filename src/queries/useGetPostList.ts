import { getPostList } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGetPostList = () => {
  const fetcher = async () => {
    const { data } = await getPostList();
    return data;
  };

  return useQuery({
    queryKey: ['getPostList'],
    queryFn: fetcher,
  });
};

export default useGetPostList;
