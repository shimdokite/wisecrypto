import { useEffect, useRef } from 'react';
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import { Markets } from '../_types/data';

interface InfiniteScroll {
  isFetching: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<InfiniteData<Markets>, Error>
  >;
}

const useInfiniteScroll = ({
  isFetching,
  hasNextPage,
  fetchNextPage,
}: InfiniteScroll) => {
  const ref = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05,
  };

  let observer: IntersectionObserver;

  const intersector: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
  ) => {
    const [entry] = entries;
    entry.isIntersecting && !isFetching && fetchNextPage();
  };

  useEffect(() => {
    if (ref && ref.current) {
      observer = new IntersectionObserver(intersector, observerOptions);
      observer.observe(ref.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [ref, isFetching, hasNextPage, fetchNextPage]);

  return ref;
};

export default useInfiniteScroll;
