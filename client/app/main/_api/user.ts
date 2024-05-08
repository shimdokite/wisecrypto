import instance from 'api/instance';

import { ChangeEmailAndPassword } from '../types/data';

export const getUserDetail = async () => {
  const response = await instance.get(`/accounts`);

  return response.data;
};

export const patchUserDetail = async ({
  email,
  previousPassword,
  changedPassword,
}: ChangeEmailAndPassword) => {
  const response = await instance.patch(`/accounts/edit`, {
    email,
    previousPassword,
    changedPassword,
  });

  return response;
};
