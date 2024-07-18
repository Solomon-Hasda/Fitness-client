import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fitness-ecommerse-backend.vercel.app/api' }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/products/create-product',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...updatedFields }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: updatedFields,
      }),
      invalidatesTags: ['products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,  // Add this line
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
