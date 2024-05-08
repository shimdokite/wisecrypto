import { create } from 'zustand';

import { UserDetail } from '../../main/types/data';

interface UserStoreProps {
  userDetail: UserDetail;

  setUserDetail: (userDetail: UserDetail) => void;
}

const initialUserDetail: UserDetail = {
  id: '',
  email: '',
  name: '',
  profileImage: '',
};

const useUserStore = create<UserStoreProps>((set) => ({
  userDetail: initialUserDetail,

  setUserDetail: (userDetail: UserDetail) => set(() => ({ userDetail })),
}));

export default useUserStore;
