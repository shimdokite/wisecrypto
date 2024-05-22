'use client';

import useMarketDetailInfiniteQuery from '../_hooks/query/useMarketDetailInfiniteQuery';
import useInfiniteScroll from '../_hooks/useInfiniteScroll';
import useScrollToTop from 'hooks/useScrollToTop';

import {
  CheckMyBalance,
  MyAsset,
  ProfileFrame,
  TotalPortfolio,
  Watchlist,
} from '.';

export default function Home() {
  const { data, isError, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useMarketDetailInfiniteQuery();

  const ref = useInfiniteScroll({
    isFetching,
    fetchNextPage,
    hasNextPage,
  });

  useScrollToTop();

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        <ProfileFrame />

        <div className="flex flex-col gap-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide ml-[15px]">
            <TotalPortfolio />

            <CheckMyBalance />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 ml-[15px]">
              <div className="flex justify-between">
                <p className="text-sm">Aset Anda</p>

                <button className="text-xs font-semibold text-Primary-1 mr-[15px]">
                  Lihat Semua
                </button>
              </div>

              <div className="flex gap-4 scrollbar-hide overflow-x-auto">
                <MyAsset />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-[15px]">
            <p className="text-sm">Watchlist</p>

            <div className="flex flex-col gap-2">
              <Watchlist
                market={data}
                isError={isError}
                isLoading={isLoading}
              />
            </div>
            <div ref={ref}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
