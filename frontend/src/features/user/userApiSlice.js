import { apiSlice } from 'features/api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/user',
        method: 'get',
      }),
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: '/user',
        method: 'post',
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } =
  userApi;
