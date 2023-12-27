import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../constants/api.constants.json'
import { EidModel } from '../models/EId.model'
import { IRowDto } from '../models/IRowDto.interface'
import { RootStore } from '../store/store'
import { ListModel } from '../models/List.model'

export const mainApi = createApi({
  reducerPath: 'api',
  tagTypes: ['nodesList'],
  baseQuery: fetchBaseQuery({ baseUrl: config.host }),
  endpoints: (builder) => ({
    EId: builder.query<EidModel, void>({
      query: () => ({
        url: '/entity/create',
        method: 'POST',
        invalidatesTags: ['nodeList']
      })
    }),
    List: builder.query<ListModel | unknown, void>({
      async queryFn(_args, api, _extraOptions, baseQuery) {
        const state = api.getState() as RootStore
        if (!state.nodes?.erid) return { error: { data: `Has no erid`, status: 500 } }
        const result = await baseQuery({
          url: `/entity/${state.nodes.erid.id}/row/list`,
          method: 'GET'
        })
        return result
      },
      providesTags: ['nodesList']
    }),
    Create: builder.mutation<IRowDto | unknown, { dto: IRowDto }>({
      async queryFn({ dto }, api, _extraOptions, baseQuery) {
        const state = api.getState() as RootStore
        if (!state.nodes?.erid) return { error: { data: `Has no erid`, status: 500 } }
        const result = await baseQuery({
          url: `/entity/${state.nodes.erid.id}/row/create`,
          method: 'POST',
          body: dto
        })
        return result
      },
      invalidatesTags: ['nodesList']
    }),
    Modify: builder.mutation<IRowDto | unknown, { rId: number; dto: IRowDto }>({
      async queryFn({ dto, rId }, api, _extraOptions, baseQuery) {
        const state = api.getState() as RootStore
        if (!state.nodes?.erid) return { error: { data: `Has no erid`, status: 500 } }
        const result = await baseQuery({
          url: `/entity/${state.nodes.erid.id}/row/${rId}/update`,
          method: 'POST',
          body: dto
        })
        return result
      },
      invalidatesTags: ['nodesList']
    }),
    Delete: builder.mutation<IRowDto | unknown, { rId: number }>({
      async queryFn({ rId }, api, _extraOptions, baseQuery) {
        const state = api.getState() as RootStore
        if (!state.nodes?.erid) return { error: { data: `Has no erid`, status: 500 } }
        const result = await baseQuery({
          url: `/entity/${state.nodes.erid.id}/row/${rId}/delete`,
          method: 'DELETE'
        })
        return result
      },
      invalidatesTags: ['nodesList']
    })
  })
})

export const {
  useEIdQuery,
  useListQuery,
  useCreateMutation,
  useModifyMutation,
  useDeleteMutation
} = mainApi
