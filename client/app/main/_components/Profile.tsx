'use client';

import { useEffect } from 'react';

import useNavigationStore from 'store/navigationStore';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
