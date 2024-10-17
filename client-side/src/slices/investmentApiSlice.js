import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Base API slice configuration
const baseQuery = fetchBaseQuery({ baseUrl: 'investkoree-server-side.vercel.app'
 }); // Ensure the base URL is correct

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Investment'], // Change to 'Investment' if you want to manage investment data
  endpoints: (builder) => ({}), // Add your endpoints here
});

const INVESTMENT_URL = '/investments';

export const investmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInvestments: builder.query({
      query: () => ({
        url: INVESTMENT_URL,
        method: 'GET',
      }),
      providesTags: ['Investment'], // Tag for cache invalidation
    }),
  }),
});

export const { useGetInvestmentsQuery } = investmentApiSlice;