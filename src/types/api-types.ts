import { Product, User } from "./types";

export interface CustomError {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
}

export type MessageResponse = {
  success: boolean;
  message: string;
};

export type UserResponse = {
  success: boolean;
  user: User;
};

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

export type ProductResponse = {
  success: boolean;
  product: Product;
};

export type CreateProductRequest = {
  id: string;
  formData: FormData;
};

export type UpdateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};

export type DeleteProductRequest = {
  userId: string;
  productId: string;
};
