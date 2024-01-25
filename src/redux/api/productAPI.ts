import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProductsResponse,
  CategoriesResponse,
  CreateProductRequest,
  DeleteProductRequest,
  ProductResponse,
  SearchProductsArguments,
  SearchProductsResponse,
  UpdateProductRequest,
} from "../../types/api-types";
import { MessageResponse } from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  // /api/v1/user/new
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),

  tagTypes: ["product"],

  endpoints: (builder) => ({
    latestProducts: builder.query<AllProductsResponse, string>({
      query: () => "latest", // coming from backend which we have given in url
      providesTags: ["product"],
    }),

    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-products?_id=${id}`,
      providesTags: ["product"],
    }),

    categories: builder.query<CategoriesResponse, string>({
      query: () => "categories",
      providesTags: ["product"],
    }),

    searchProducts: builder.query<
      SearchProductsResponse,
      SearchProductsArguments
    >({
      query: ({ price, search, sort, category, page }) => {
        let base = `all?search=${search}&page=${page}`;
        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;

        return base;
      },
      providesTags: ["product"],
    }),

    productDetails: builder.query<ProductResponse, string>({
      query: (id) => id,
      providesTags: ["product"],
    }),

    createProducts: builder.mutation<MessageResponse, CreateProductRequest>({
      query: ({ formData, id }) => ({
        url: `new?_id=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation<MessageResponse, UpdateProductRequest>({
      query: ({ formData, productId, userId }) => ({
        url: `${productId}?_id=${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation<MessageResponse, DeleteProductRequest>({
      query: ({ productId, userId }) => ({
        url: `${productId}?_id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
  useSearchProductsQuery,
  useCreateProductsMutation,
  useProductDetailsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productAPI;
