'use client';

import { FormEvent, useEffect } from 'react';

import { patchUserDetail } from '../_api/user';

import useNavigationStore from 'store/navigationStore';
import useUserStore from 'store/userStore';

import useForm from 'hooks/useForm';

import { SaveChangeButton, PrivatePresentation } from '.';

import { ChangeEmailAndPassword } from '../types/data';

export default function PrivateContainer() {
  const { setSettingType } = useNavigationStore();
  const { userDetail, setUserDetail } = useUserStore();

  const { values, handleInputValueChange, setSubmitting } = useForm({
    initialValue: {
      email: userDetail.email,
      previousPassword: '',
      changedPassword: '',
    },
    onSubmit: async (values: ChangeEmailAndPassword) => {
      const { email, previousPassword, changedPassword } = values;

      await patchUserDetail({
        email,
        previousPassword,
        changedPassword,
      });
    },
  });

  useEffect(() => {
    setUserDetail({ ...userDetail, email: values.email });
  }, [values.email]);

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
