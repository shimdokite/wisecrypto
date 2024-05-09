import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchUserDetail } from '../../_api/user';

import { ChangeEmailAndPassword } from '../../types/data';

const useUpdateUserDetailMutation = ({
  email,
  previousPassword,
  changedPassword,
}: ChangeEmailAndPassword) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () =>
      patchUserDetail({
        email,
        previousPassword,
        changedPassword,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetail'] });
    },
  });

  return { mutate };
};

export default useUpdateUserDetailMutation;
