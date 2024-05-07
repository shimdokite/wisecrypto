import instance from 'api/instance';

import { ChangeEmailAndPassword } from '../types/data';

export const getUserDetail = async (id: string) => {
  const response = await instance.get(`/accounts/${id}`);

  return response.data;
};

export const patchUserDetail = async ({
  id,
  email,
  previousPassword,
  changedPassword,
}: ChangeEmailAndPassword) => {
  const response = await instance.patch(`/accounts/edit/${id}`, {
    email,
    previousPassword,
    changedPassword,
  });

  return response;
};
