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

export interface Market {
  id: number;
  marketImage: string;
  marketName: string;
  baseCoin: string;
  marketCap: string;
  percent: string;
}
