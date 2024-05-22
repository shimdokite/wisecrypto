'use client';

import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useForm from 'hooks/useForm';
import useRegisterMutation from '../_hooks/mutate/useRegisterMutation';

import { Logo, SignTop } from 'components';
import RegisterFormPresentation from './RegisterFormPresentation';

import { CreateAccount } from '../_types/data';

export default function RegisterFormContainer() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordCheckShow, setIsPasswordCheckShow] = useState(false);

  const router = useRouter();

  const { mutate: postNewUserInfomation } = useRegisterMutation();

  const { next, values, handleInputValueChange, setSubmitting, setNext } =
    useForm({
      initialValue: {
        name: '',
        email: '',
        password: '',
        position: 'Pengguna',
        phoneNumber: '',
        check: false,
      },
      onSubmit: async (values: CreateAccount) => {
        const { name, phoneNumber, position, email, password } = values;
        const userInfo = { name, phoneNumber, position, email, password };

        await postNewUserInfomation(userInfo);
      },
    });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const {
      name,
      phoneNumber,
      position,
      email,
      password,
      passwordCheck,
      check,
    } = values;

    if (password !== passwordCheck) {
      toast.error('Kata sandi tidak cocok.');
      return;
    }

    if (name && phoneNumber && position && email && password && check && next)
      setSubmitting(true);
  };

  const handleNextStep = () => {
    if (values.name === '' || values.phoneNumber === '') return;

    setNext(true);
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <section className="w-full h-full">
      <div className="mx-[15px]">
        <div className="flex flex-col gap-[72px] pt-12">
          <Logo />

          <div className="flex flex-col gap-12">
            <SignTop role="register" />

            <div className="flex flex-col gap-6">
              <RegisterFormPresentation
                next={next}
                values={values}
                isPasswordShow={isPasswordShow}
                isPasswordCheckShow={isPasswordCheckShow}
                handleSubmit={handleSubmit}
                handleInputValueChange={handleInputValueChange}
                setIsPasswordShow={setIsPasswordShow}
                setIsPasswordCheckShow={setIsPasswordCheckShow}
                handleNextStep={handleNextStep}
                goToLogin={goToLogin}
              />
            </div>
          </div>
        </div>

        {!next && (
          <div className="flex justify-end pt-12">
            <button
              className="flex items-center text-Gray2-1"
              onClick={() => setNext(!next)}>
              <p className="py-2 pr-1 text-[11px] underline">
                Lewati langkah ini
              </p>

              <Image
                src="/assets/icon/right_arrow.svg"
                alt="right arrow"
                width={10.67}
                height={10.37}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
