import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProductsResponse,
  CategoriesResponse,
  SearchProductsArguments,
  SearchProductsResponse,
} from "../../types/reducer-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  // /api/v1/user/new
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  endpoints: (builder) => ({
    latestProducts: builder.query<AllProductsResponse, string>({
      query: () => "latest", // coming from backend which we have given in url
    }),
    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-products?_id=${id}`,
    }),
    categories: builder.query<CategoriesResponse, string>({
      query: () => "categories",
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
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
  useSearchProductsQuery,
} = productAPI;
