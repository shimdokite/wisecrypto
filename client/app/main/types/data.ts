export interface ChangeEmailAndPassword {
  id?: string;
  email: string;
  previousPassword: string;
  changedPassword: string;
}

export interface UserDetail {
  id: string;
  email: string;
  name: string;
  profileImage: string;
}
