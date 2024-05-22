'use client';

import useMarketDetailInfiniteQuery from '../_hooks/query/useMarketDetailInfiniteQuery';
import useInfiniteScroll from '../_hooks/useInfiniteScroll';
import useScrollToTop from 'hooks/useScrollToTop';

import { Search, MarketFilter, Watchlist } from '.';

export default function Market() {
  const { data, isError, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useMarketDetailInfiniteQuery();

  const ref = useInfiniteScroll({
    isFetching,
    fetchNextPage,
    hasNextPage,
  });

  useScrollToTop();

  return (
    <>
      <div className="w-full mt-4">
        <Search />

        <div className="flex gap-4 scrollbar-hide overflow-x-auto">
          <MarketFilter />
        </div>

        <div className="flex flex-col gap-2 mx-[15px]">
          <Watchlist market={data} isError={isError} isLoading={isLoading} />
        </div>
        <div ref={ref}></div>
      </div>
    </>
  );
}
