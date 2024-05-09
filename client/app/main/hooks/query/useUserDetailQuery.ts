import { useQuery } from '@tanstack/react-query';

import { getUserDetail } from '../../_api/user';

const useUserDetailQuery = () => {
  const {
    data: userDetail,
    isError,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['userDetail'],
    queryFn: () => getUserDetail(),
    staleTime: Infinity,
  });

  return { userDetail, isError, isLoading, isFetching };
};

export default useUserDetailQuery;
