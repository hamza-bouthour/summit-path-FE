import { config } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const summitPathApi = createApi({
    reducerPath: 'summitPathApi',
    baseQuery: fetchBaseQuery({ baseUrl: config.summitPathApiBaseUrl }),
    endpoints: (builder) => ({
        // Define your endpoints here
    }),
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       