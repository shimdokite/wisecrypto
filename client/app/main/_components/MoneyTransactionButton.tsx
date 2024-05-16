import Image from 'next/image';

export default function MoneyTransactionButton() {
  return (
    <div className="flex justify-center">
      <div className="w-fit flex justify-center items-center bg-White-1 rounded-2xl">
        <div className="flex items-center">
          <div className="flex flex-col justify-center items-center px-[50px] py-3">
            <Image
              src="/assets/icon/download.svg"
              alt="download button"
              width={20}
              height={19}
              className="mb-[2px]"
            />
            <p className="text-SpringGreen-1 text-sm">Tarik</p>
          </div>

          <div className="">
            <div className="h-9 border-l-[1px] border-l-Primary-1"></div>
          </div>

          <div className="flex flex-col justify-center items-center px-10 py-3">
            <Image
              src="/assets/icon/plus.svg"
              alt="plus button"
              width={20}
              height={20}
              className="mb-[2px] w-auto h-auto"
            />
            <p className="text-SpringGreen-1 text-sm">Tambah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
