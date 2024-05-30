import Image from 'next/image.js';

import { Button, SignBottom } from 'components';
import RegisterCheck from './RegisterCheck';

import { CreateAccount } from '../_types/data';

interface RegisterFormPresentationProps {
  next: boolean;
  values: CreateAccount;
  isPasswordShow: boolean;
  isPasswordCheckShow: boolean;

  handleInputValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setIsPasswordShow: (isPasswordShow: boolean) => void;
  setIsPasswordCheckShow: (isPasswordCheckShow: boolean) => void;
  handleNextStep: () => void;
  goToLogin: () => void;
}

export default function RegisterFormPresentation({
  next,
  values,
  isPasswordShow,
  isPasswordCheckShow,
  handleInputValueChange,
  handleSubmit,
  setIsPasswordShow,
  setIsPasswordCheckShow,
  handleNextStep,
  goToLogin,
}: RegisterFormPresentationProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {next ? (
        <>
          <div className="flex flex-col gap-2">
            <label className="font-montserrat">Email</label>
            <input
              type="text"
              name="email"
              placeholder="botpablo@gmail.com"
              value={values.email}
              onChange={handleInputValueChange}
              className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-montserrat">Sandi</label>
            <div className="relative">
              <input
                type={isPasswordShow ? 'text' : 'password'}
                name="password"
                className={`w-full py-3 pl-4 bg-no-repeat bg-[center_right_17px] outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1`}
                placeholder="Masukkan Sandi"
                value={values.password}
                onChange={handleInputValueChange}
              />

              <Image
                src={isPasswordShow ? SHOW_AND_HIDE.show : SHOW_AND_HIDE.hide}
                alt="password show and hide"
                width={16}
                height={16}
                className="absolute top-0 bottom-0 right-0 mr-[17px] h-full"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-montserrat">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <input
                type={isPasswordCheckShow ? 'text' : 'password'}
                name="passwordCheck"
                className={`w-full py-3 pl-4 bg-no-repeat bg-[center_right_17px] outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1`}
                placeholder="Konfirmasi Kata Sandi"
                value={values.passwordCheck}
                onChange={handleInputValueChange}
              />

              <Image
                src={
                  isPasswordCheckShow ? SHOW_AND_HIDE.show : SHOW_AND_HIDE.hide
                }
                alt="password show and hide"
                width={16}
                height={16}
                className="absolute top-0 bottom-0 right-0 mr-[17px] h-full"
                onClick={() => setIsPasswordCheckShow(!isPasswordCheckShow)}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <label className="font-montserrat">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap Pengguna"
              value={values.name}
              onChange={handleInputValueChange}
              className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-montserrat">No. Telp</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="No. Telp yang dapat dihubungi"
              value={values.phoneNumber}
              onChange={handleInputValueChange}
              className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
            />
          </div>

          <div
            className="flex flex-col gap-2"
            onChange={handleInputValueChange}>
            <label className="font-montserrat">Daftar Sebagai</label>

            <select
              name="position"
              className="appearance-none py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg">
              <option value="Pengguna">Pengguna</option>
              <option value="Pengelola">Pengelola</option>
            </select>
          </div>
        </>
      )}

      <div className="flex flex-col gap-6 justify-center items-center">
        {next ? (
          <>
            <RegisterCheck
              values={values}
              handleInputValueChange={handleInputValueChange}
            />

            <Button color="green" type="submit">
              DAFTAR
            </Button>
          </>
        ) : (
          <Button color="green" type="button" onClick={handleNextStep}>
            SELANJUTNYA
          </Button>
        )}

        <SignBottom role="register" goToPage={goToLogin} />
      </div>
    </form>
  );
}

const SHOW_AND_HIDE = {
  show: '/assets/icon/show.svg',
  hide: '/assets/icon/hide.svg',
} as const;
