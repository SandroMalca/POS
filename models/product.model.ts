export interface IProduct {
  id: string;
  name: string;
  categoria: string;
  precio: number;
  image: string;
}

export interface IProductForm {
  name: string;
  categoria: string;
  precio: number;
  image: string | null;
}