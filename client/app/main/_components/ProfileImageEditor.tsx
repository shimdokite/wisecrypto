'use client';

import Image from 'next/image';

import useUserDetailQuery from '../_hooks/query/useUserDetailQuery';

import { USER_DEFAULT_PROFILE_IMAGE } from '../_constants/data';

export default function ProfileImageEditor() {
  const { userDetail } = useUserDetailQuery();

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <Image
        src={userDetail?.profileImage || USER_DEFAULT_PROFILE_IMAGE}
        alt="profile image"
        width={80}
        height={80}
        className="rounded-full"
      />

      <Image
        src="assets/icon/image_editor.svg"
        alt="profile image"
        width={28}
        height={28}
        className="relative left-7 bottom-7 rounded-full w-auto h-auto"
      />

      <h2 className="text-2xl font-semibold -mt-5">
        {userDetail?.name || 'Unknown'}
      </h2>
    </div>
  );
}
