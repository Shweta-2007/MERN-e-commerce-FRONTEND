import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { MessageResponse } from "../../types/api-types";
import { User } from "../../types/types";

export const userAPI = createApi({
  reducerPath: "userApi",
  // /api/v1/user/new
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// <string, number> => query me jo user hai wo number hai, aur query function se jo bhi return hoga, url, method and body, ye string hai.
// But here we have made our custom type for result type that is MessageResponse

export const { useLoginMutation } = userAPI;
