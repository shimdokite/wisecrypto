'use client';
import Image from 'next/image';

import { Market, Markets } from '../_types/data';

interface WatchlistProps {
  market: any;
  isError: boolean;
  isLoading: boolean;
}

export default function Watchlist({
  market,
  isError,
  isLoading,
}: WatchlistProps) {
  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading...</p>;

  return market.pages.map((marketDetail: Markets) =>
    marketDetail.market.map((platform: Market) => (
      <article
        key={platform.id}
        className="flex justify-between items-center bg-White-1 w-[343px] h-[88px] rounded-[10px] px-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-[10px] bg-Light-1 flex justify-center items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_COIN_MARKET_CAP_IMAGE_API_URL}/${platform.id}.png`}
              alt="brand image"
              width={40}
              height={40}
            />
          </div>

          <div className="flex flex-col">
            <p className="text-Black-1 text-xl font-semibold">
              {platform.symbol}/BUSD
            </p>

            <p className="text-Gray-1 font-light">{platform.name}</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-Black-1 font-semibold">
            ${Number(platform.price).toFixed(2)}
          </p>

          <div
            className={`${
              platform.percent_change_24h[0] === '-'
                ? 'bg-Danger-1'
                : 'bg-Success-1'
            } rounded-lg flex justify-center items-center px-1 py-1 gap-[2px] opacity-80`}>
            <Image
              src={
                platform.percent_change_24h[0] === '-'
                  ? '/assets/icon/down.svg'
                  : '/assets/icon/up.svg'
              }
              alt="arrow image"
              width={14}
              height={14}
            />

            <p className="text-White-1 font-semibold text-[10px]">
              {Number(platform.percent_change_24h).toFixed(2)}
            </p>
          </div>
        </div>
      </article>
    )),
  );
}
