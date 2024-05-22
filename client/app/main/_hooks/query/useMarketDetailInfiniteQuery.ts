import { useInfiniteQuery } from '@tanstack/react-query';

import { getMarketDetail } from '../../_api/market';

const useMarketDetailInfiniteQuery = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ['marketDetail'],
    queryFn: ({ pageParam = 0 }) => getMarketDetail(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.currentPage !== lastPage.pageInfo.limit &&
      lastPage.pageInfo.currentPage + 1,
    initialPageParam: 0,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};

export default useMarketDetailInfiniteQuery;
