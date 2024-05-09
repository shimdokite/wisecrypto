import Image from 'next/image';

export default function MyAsset() {
  //TODO: 코인 회사 데이터 node 서버 만들기
  const USER_ASSETS = [
    {
      id: 1,
      image: '/assets/image/bitcoin.svg',
      title: 'BTC',
      name: 'Bitcoin',
      percent: '15.3%',
      portfolio: '26.46',
      coin: '0.0012',
    },
    {
      id: 2,
      image: '/assets/image/etherium.svg',
      title: 'ETH',
      name: 'Etherium',
      percent: '-2.1%',
      portfolio: '37.30',
      coin: '0.009',
    },
  ];

  return USER_ASSETS.map((asset) => (
    <section
      key={asset.id}
      className="h-[119px] flex flex-col justify-center items-center bg-White-1 rounded-[10px] px-[26px] py-4">
      <div className="w-full h-full flex justify-between items-center gap-[25px]">
        <div className="flex items-center gap-1">
          <div className="flex justify-center items-center w-10 h-10 bg-Light-1 rounded-[10px]">
            <Image src={asset.image} alt="brand image" width={28} height={28} />
          </div>

          <div className="flex flex-col">
            <p className="text-Black-1 font-semibold text-[16px]">
              {asset.title}
            </p>

            <p className="text-Gray-1 font-light text-[10px]">{asset.name}</p>
          </div>
        </div>

        <div
          className={`${
            asset.percent[0] === '-' ? 'bg-Danger-1' : 'bg-Success-1'
          } w-[54px] rounded-lg flex justify-center items-center px-1 py-1 gap-[1px] opacity-80`}>
          <Image
            src={
              asset.percent[0] === '-'
                ? '/assets/icon/down.svg'
                : '/assets/icon/up.svg'
            }
            alt="arrow image"
            width={14}
            height={14}
          />

          <p className="text-White-1 font-semibold text-[10px]">
            {asset.percent}
          </p>
        </div>
      </div>

      <div className="w-full my-2">
        <hr className="border-Gray2-1"></hr>
      </div>

      <div className="w-full">
        <p className="text-Gray2-1 font-light text-[10px]">Portofolio</p>

        <div className="flex justify-between items-center">
          <p className="text-Black-1 font-semibold text-sm">
            ${asset.portfolio}
          </p>

          <div className="flex text-Gray-1 font-semibold text-[10px]">
            <p>{asset.coin}&nbsp;</p>

            <p>{asset.title}</p>
          </div>
        </div>
      </div>
    </section>
  ));
}
