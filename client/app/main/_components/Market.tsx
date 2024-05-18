'use client';

import useScrollToTop from 'hooks/useScrollToTop';

import { Search, MarketFilter, Watchlist } from '.';

export default function Market() {
  useScrollToTop();

  return (
    <div className="w-full mt-4">
      <Search />

      <div className="flex gap-4 scrollbar-hide overflow-x-auto">
        <MarketFilter />
      </div>

      <div className="flex flex-col gap-2 mx-[15px]">
        <Watchlist />
      </div>
    </div>
  );
}
