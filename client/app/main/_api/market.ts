import instance from 'api/instance';

export const getMarketDetail = async (limit: number) => {
  const response = await instance.get('/market', { params: { limit } });

  return { market: response.data.market, pageInfo: response.data.pageInfo };
};
