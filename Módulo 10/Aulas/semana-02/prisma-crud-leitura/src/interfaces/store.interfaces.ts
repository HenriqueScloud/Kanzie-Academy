import { IProduct } from "./products.interfaces";

export interface IStore {
  id: number;
  name: string;
  products?: IProduct[];
}

export type TUpdadeStoreBody = Partial<Pick<IStore, "name">>;
