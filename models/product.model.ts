export interface IProduct {
  id: number;
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