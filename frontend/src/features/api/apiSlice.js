import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from 'utils/token';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:9000',
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
