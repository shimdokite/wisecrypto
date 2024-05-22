'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import useMarketDetailInfiniteQuery from './main/hooks/query/useMarketDetailInfiniteQuery';

import Spinner from '../public/assets/icon/spinner.svg';

export default function SplashScreen() {
  const router = useRouter();

  const { isSuccess } = useMarketDetailInfiniteQuery();

  const delay = () => {
    return setTimeout(() => router.push('/main'), 3000);
  };

  useEffect(() => {
    if (isSuccess) {
      delay();
    }
  }, [isSuccess]);

  return (
    <div className="bg-gradient-to-b from-MintGreen-1 from-20% to-VividCerulean-1 w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-60">
        <Image
          src="/assets/image/wisecrypt_main_logo.svg"
          alt="wisecrypto logo"
          width={270}
          height={95}
        />

        <div className="text-White-1">
          Trusted by millions of users<p className="text-center">worldwide</p>
        </div>
      </div>

      <div className="mt-36">
        <Spinner className="w-10 h-10 animate-spin fill-White-1" />
      </div>
    </div>
  );
}
