import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { postUserCredentials } from '../_api/user';

import { LoginInfo } from '../_types/data';

const useLoginMutation = () => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: ({ email, password }: LoginInfo) =>
      postUserCredentials({ email, password }),

    onSuccess: () => {
      return router.push('/main');
    },

    onError: () => {
      return toast.error('Email atau kata sandi tidak cocok.');
    },
  });

  return { mutate };
};

export default useLoginMutation;
