import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Base API slice configuration
const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});