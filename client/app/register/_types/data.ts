export interface CreateAccount {
  name: string;
  phoneNumber: string;
  position: string;
  email: string;
  password: string;
  passwordCheck?: string;
  check?: boolean;
}
