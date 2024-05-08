import instance from 'api/instance';

export const getMarketDetail = async () => {
  const response = await instance.get('/market');

  return response.data;
};
