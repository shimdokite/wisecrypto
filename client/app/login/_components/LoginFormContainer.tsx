'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import useForm from 'hooks/useForm';
import useLoginMutation from '../_hooks/useLoginMutation';

import { Logo, SignTop } from 'components';
import LoginFormPresentation from './LoginFormPresentation';

import { LoginInfo } from '../_types/data';

export default function LoginFormContainer() {
  const router = useRouter();

  const { mutate: postUserCredentials } = useLoginMutation();

  const { values, handleInputValueChange, setSubmitting } = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    onSubmit: async (values: LoginInfo) => {
      const { email, password } = values;

      await postUserCredentials({ email, password });
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { email, password } = values;

    if (email && password) setSubmitting(true);
  };

  const goToRegister = () => {
    router.push('/register');
  };

  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <Logo />

          <div className="flex flex-col gap-12">
            <SignTop role="login" />

            <div className="h-full flex flex-col gap-8">
              <LoginFormPresentation
                values={values}
                handleInputValueChange={handleInputValueChange}
                handleSubmit={handleSubmit}
                goToRegister={goToRegister}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
