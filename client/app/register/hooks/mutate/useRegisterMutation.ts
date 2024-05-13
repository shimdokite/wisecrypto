import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { postNewUserInfomation } from '../../_api/user';

import { CreateAccount } from '../../_types/data';

const useRegisterMutation = () => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: ({
      email,
      password,
      name,
      phoneNumber,
      position,
    }: CreateAccount) =>
      postNewUserInfomation({ email, password, name, phoneNumber, position }),

    onSuccess: () => {
      return (
        toast.success('Selamat atas pendaftaran Anda.'), router.push('/login')
      );
    },

    onError: () => {
      return toast.error('Pendaftaran gagal.');
    },
  });

  return { mutate };
};

export default useRegisterMutation;
