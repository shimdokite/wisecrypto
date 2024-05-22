import { useEffect, useState } from 'react';

import { LoginInfo } from '../../login/_types/data';
import { CreateAccount } from '../../register/_types/data';
import { ChangeEmailAndPassword } from '../../main/_types/data';

interface UseFormProps<
  T extends CreateAccount | LoginInfo | ChangeEmailAndPassword,
> {
  initialValue: T;
  onSubmit: (values: T) => void;
}

const useForm = <T extends CreateAccount | LoginInfo | ChangeEmailAndPassword>({
  initialValue,
  onSubmit,
}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialValue);
  const [next, setNext] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, type, value, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues({ ...values, [name]: newValue });
  };

  useEffect(() => {
    if (submitting) {
      onSubmit(values);
    }

    setSubmitting(false);
  }, [submitting]);

  return {
    next,
    submitting,
    values,
    setValues,
    setNext,
    setSubmitting,
    handleInputValueChange,
    onSubmit,
  };
};

export default useForm;
