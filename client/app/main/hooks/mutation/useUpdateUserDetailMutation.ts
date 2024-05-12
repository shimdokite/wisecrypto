import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchUserDetail } from '../../_api/user';

import useNavigationStore from 'store/navigationStore';

import { ChangeEmailAndPassword } from '../../types/data';

const useUpdateUserDetailMutation = ({
  email,
  previousPassword,
  changedPassword,
}: ChangeEmailAndPassword) => {
  const queryClient = useQueryClient();

  const { setSettingType } = useNavigationStore();

  const { mutate } = useMutation({
    mutationFn: () =>
      patchUserDetail({
        email,
        previousPassword,
        changedPassword,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetail'] });

      return alert('diubah.'), setSettingType('');
    },
    onError: () => {
      return alert('Email atau kata sandi tidak cocok.');
    },
  });

  return { mutate };
};

export default useUpdateUserDetailMutation;
