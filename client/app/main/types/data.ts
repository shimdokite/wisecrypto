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
  name: string;
  symbol: string;
  price: string;
  marketImage: string;
  percent_change_24h: string;
}

export interface Markets {
  market: [];
  pageInfo: {};
}
