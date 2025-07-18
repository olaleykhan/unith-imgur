import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ImageResponse, Image } from "@/lib/types";
import { transformAndSortImage } from './utils';
import { PLACEHOLDER_IMG } from "@/config";


type ImagesApiResponse = Record<string, ImageResponse>;

// Define a service using a base URL and expected endpoints
export const imagesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  reducerPath: "imagesApi",
  tagTypes: ["Images"],
  endpoints: (build) => ({
    fetchAll: build.query<Image[], undefined>({
      query: () => `/images`,
      transformResponse: (response: ImagesApiResponse) => transformAndSortImage(response, PLACEHOLDER_IMG),
      providesTags: (result, error, id) => [{ type: "Images", id }],
    }),
  }),
});

// Hooks are auto-generated by RTK-Query

export const { useFetchAllQuery } = imagesApiSlice;
