import { apiSlice } from 'features/api/apiSlice';
import { getTokenData, storeToken } from 'utils/token';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          const { token } = result.data;
          storeToken(token);
          const user = getTokenData();
          dispatch(userLoggedIn(user));
        } catch (err) {
          // do nothing
        }
      },
    }),
    getMe: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'get',
      }),
    }),
    updateFullName: builder.mutation({
      query: ({ name }) => ({
        url: '/auth/me/name',
        method: 'post',
        body: { name },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getMe', undefined, (draft) => {
            draft.name = arg.name;
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: '/auth/me/password',
        method: 'put',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useUpdateFullNameMutation,
  useUpdatePasswordMutation,
} = authApi;
