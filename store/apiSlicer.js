import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//const baseUrl = "https://backend-finstep-h59p.vercel.app/";
const baseUrl = "https://backend-fitness-app.vercel.app/";

export const appSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["exercises", "Login"],
  endpoints: (builder) => ({
    getExercise: builder.query({
      query: (id) => `workout/exercises/${id}`,
      providesTags: ["exercises"],
    }),
    getExerciseByProvidingBodyPart: builder.query({
      query: (name) => `workout/bodyPart/${name}`,
      providesTags: ["exercises"],
    }),
    getLoginDetails: builder.query({
      query: (id) => `login/${id}`,
      providesTags: ["Login"],
    }),

    getRoutineDetails: builder.query({
      query: (id) => `workout/routine/${id}`,
      providesTags: ["Login"],
    }),
    createNewRoutine: builder.mutation({
      query: (createRoutine) => ({
        url: "workout/createRoutine",
        method: "POST",
        body: createRoutine,
      }),
    }),
    insertIntoExistingRoutine: builder.mutation({
      query: (createRoutine) => ({
        url: "workout/insertInExisitingRotuine",
        method: "POST",
        body: createRoutine,
      }),
    }),

    createParentFund: builder.mutation({
      query: (ParentFund) => ({
        url: "parentFund",
        method: "POST",
        body: ParentFund,
      }),
    }),
    createFund: builder.mutation({
      query: (createFund) => ({
        url: "studentFund",
        method: "POST",
        body: createFund,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"],
    }),

    newAccount: builder.mutation({
      query: (id) => ({
        url: "/login/new-account",
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const {
  useGetLoginDetailsQuery,
  useGetExerciseQuery,
  useLoginMutation,
  useCreateParentFundMutation,
  useCreateFundMutation,
  useNewAccountMutation,
  useGetRoutineDetailsQuery,
  useCreateNewRoutineMutation,
  useInsertIntoExistingRoutineMutation,
  useGetExerciseByProvidingBodyPartQuery
} = appSlice;
