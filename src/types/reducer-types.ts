import { Product, User } from "./types";

export interface userReducerInitialState {
  user: User | null;
  loading: boolean;
}

export interface AllProductsResponse {
  success: boolean;
  products: Product[];
}

//yhaan success aur products isliye hai q ki latest product ke api me hm success aur product return kar rahe hai.

export interface CategoriesResponse {
  success: boolean;
  categories: string[];
}

export interface SearchProductsResponse {
  success: boolean;
  products: Product[];
  totalPage: number;
}

export interface SearchProductsArguments {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
}
