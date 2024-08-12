
// TYPE PRINCIPAL
export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  storeId: number;
}
// TYPE PARA CRUD DE CRIAÇÃO
export type TCreateProductBody = Omit<IProduct, "id">;
// TYPE PARA CRUD DE ATUALIZAÇÃO
export type TUpdateProductBody = Partial<
  Pick<IProduct, "description" | "name" | "price">
>;
// TYPE PARA CRUD DE ATUALIZAÇÃO MULTIPLA 

// Lembre-se de criar uma tipagem para o crud, dessa forma teremos um modelo de objeto que chegara nas requisições de forma mais padronizadas. 