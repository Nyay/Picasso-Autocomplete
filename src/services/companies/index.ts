import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICompanies} from './types';

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://autocomplete.clearbit.com/v1/companies/suggest'}),
    endpoints: (builder) => ({
        getCompanies: builder.query<ICompanies[], string>({
        query: (input) => `?query=${input}`,
        }),
    }),
})

export const { useLazyGetCompaniesQuery } = companiesApi