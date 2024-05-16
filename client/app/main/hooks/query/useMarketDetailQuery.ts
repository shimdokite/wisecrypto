import { useQuery } from '@tanstack/react-query';

import { getMarketDetail } from '../../_api/market';

const useMarketDetailQuery = () => {
  const {
    data: market,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['marketDetail'],
    queryFn: () => getMarketDetail(),
    staleTime: 300000,
    refetchInterval: 300000,
    refetchIntervalInBackground: true,
  });

  return { market, isError, isLoading };
};

export default useMarketDetailQuery;
