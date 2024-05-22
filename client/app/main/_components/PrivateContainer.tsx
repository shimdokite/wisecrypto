'use client';

import { FormEvent } from 'react';

import useNavigationStore from 'store/navigationStore';

import useUpdateUserDetailMutation from '../_hooks/mutation/useUpdateUserDetailMutation';
import useUserDetailQuery from '../_hooks/query/useUserDetailQuery';
import useForm from 'hooks/useForm';

import { SaveChangeButton, PrivatePresentation } from '.';

export default function PrivateContainer() {
  const { setSettingType } = useNavigationStore();
  const { userDetail } = useUserDetailQuery();

  const { values, handleInputValueChange, setSubmitting } = useForm({
    initialValue: {
      email: userDetail.email,
      previousPassword: '',
      changedPassword: '',
    },
    onSubmit: async () => {
      patchUserDetail();
    },
  });

  const { email, previousPassword, changedPassword } = values;

  const { mutate: patchUserDetail } = useUpdateUserDetailMutation({
    email,
    previousPassword,
    changedPassword,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
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
