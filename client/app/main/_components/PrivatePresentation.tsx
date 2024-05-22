import Image from 'next/image';

import { ChangeEmailAndPassword } from '../_types/data';

interface PrivatePresentationProps {
  values: ChangeEmailAndPassword;

  setSettingType: (settingType: string) => void;
  handleInputValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PrivatePresentation({
  values,
  setSettingType,
  handleInputValueChange,
}: PrivatePresentationProps) {
  return (
    <div className="flex flex-col gap-8 mx-[15px]">
      <div className="py-2 pr-2 flex items-center gap-[10px]">
        <Image
          src="/assets/icon/setting_arrow_left.svg"
          alt="arrow left"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => setSettingType('')}
        />
        <p className="font-semibold">Privasi</p>
      </div>

      <div className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-2">
          <label className="font-montserrat">Email</label>
          <input
            type="email"
            name="email"
            placeholder="botpablo@gmail.com"
            value={values.email}
            onChange={handleInputValueChange}
            className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-montserrat text-sm">Sandi Lama</label>
          <input
            type="password"
            name="previousPassword"
            placeholder="Masukkan sandi lama"
            value={values.previousPassword}
            onChange={handleInputValueChange}
            className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-montserrat text-sm">Sandi Baru</label>
          <input
            type="password"
            name="changedPassword"
            placeholder="Masukkan sandi baru"
            value={values.changedPassword}
            onChange={handleInputValueChange}
            className="w-full py-3 pl-4 outline-none focus:shadow-inputShadow focus:border-Primary-1 border-[1px] border-AquaSpring-1 bg-White-1 rounded-lg text-Gray-1"
          />
        </div>
      </div>
    </div>
  );
}
