'use client';

import useNavigationStore from 'store/navigationStore';

import { SettingPresentation } from '.';

import { PROFILE_SETTING } from '../_constants/data';

export default function SettingContainer() {
  const { setSettingType } = useNavigationStore();

  return (
    <>
      <div className="pb-6">
        <SettingPresentation
          title={PROFILE_SETTING.transaction_list.title}
          description={PROFILE_SETTING.transaction_list.description}
          image={PROFILE_SETTING.transaction_list.image}
          setSettingType={setSettingType}
        />
      </div>

      <div>
        <h2 className="pb-3">Pengaturan</h2>

        <div className="flex flex-col gap-2">
          <SettingPresentation
            title={PROFILE_SETTING.private.title}
            description={PROFILE_SETTING.private.description}
            image={PROFILE_SETTING.private.image}
            setSettingType={setSettingType}
          />

          <SettingPresentation
            title={PROFILE_SETTING.payment.title}
            description={PROFILE_SETTING.payment.description}
            image={PROFILE_SETTING.payment.image}
            setSettingType={setSettingType}
          />

          <SettingPresentation
            title={PROFILE_SETTING.notifications.title}
            description={PROFILE_SETTING.notifications.description}
            image={PROFILE_SETTING.notifications.image}
            setSettingType={setSettingType}
          />
        </div>

        <div className="pt-4">
          <SettingPresentation
            title={PROFILE_SETTING.resign.title}
            description={PROFILE_SETTING.resign.description}
            image={PROFILE_SETTING.resign.image}
            setSettingType={setSettingType}
          />
        </div>
      </div>
    </>
  );
}
