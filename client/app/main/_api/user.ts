import instance from 'api/instance';

export const getUserDetail = async (id: string) => {
  const response = await instance.get(`/accounts/${id}`);

  return response.data;
};
