'use client';

import useNavigationStore from 'store/navigationStore';

import useScrollToTop from 'hooks/useScrollToTop';

import {
  ProfileImageEditor,
  CurrentMyBalance,
  SettingContainer,
  PrivateContainer,
} from '.';

export default function Profile() {
  const { settingType } = useNavigationStore();

  const renderSetting = (settingType: string) => {
    if (settingType === 'Privasi') return <PrivateContainer />;
  };

  useScrollToTop();

  return (
    <>
      {settingType ? (
        <>{renderSetting(settingType)}</>
      ) : (
        <div className="mx-[15px]">
          <ProfileImageEditor />

          <CurrentMyBalance />

          <SettingContainer />
        </div>
      )}
    </>
  );
}
