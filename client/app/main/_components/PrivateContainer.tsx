'use client';

import { FormEvent, useEffect } from 'react';
import { getCookie } from 'cookies-next';

import { getUserDetail, patchUserDetail } from '../_api/user';

import useNavigationStore from 'store/navigationStore';

import useForm from 'hooks/useForm';

import { SaveChangeButton, PrivatePresentation } from '.';

import { ChangeEmailAndPassword } from '../types/data';

export default function PrivateContainer() {
  const id = getCookie('userId');

  const { setSettingType } = useNavigationStore();

  useEffect(() => {
    const getMyDetail = async () => {
      const response = await getUserDetail(id as string);

      response.map((userInfo: ChangeEmailAndPassword) =>
        setValues({ ...values, email: userInfo.email }),
      );
    };

    getMyDetail();
  }, [id]);

  const { values, handleInputValueChange, setSubmitting, setValues } = useForm({
    initialValue: {
      email: '',
      previousPassword: '',
      changedPassword: '',
    },
    onSubmit: async (values: ChangeEmailAndPassword) => {
      const { email, previousPassword, changedPassword } = values;

      await patchUserDetail({
        id,
        email,
        previousPassword,
        changedPassword,
      });
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { email, previousPassword, changedPassword } = values;

    if (email && previousPassword && changedPassword) setSubmitting(true);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <PrivatePresentation
        values={values}
        handleInputValueChange={handleInputValueChange}
        setSettingType={setSettingType}
      />

      <SaveChangeButton>Simpan</SaveChangeButton>
    </form>
  );
}
