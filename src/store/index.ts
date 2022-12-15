import {configureStore} from '@reduxjs/toolkit';
import {companiesApi} from '../services';

export const store = configureStore({
    reducer: {
        [companiesApi.reducerPath]: companiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(companiesApi.middleware),
})