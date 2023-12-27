import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListModel } from '../../models/List.model'
import { EidModel } from '../../models/EId.model'
import { mainApi } from '../../services/main-api'
import { parseMap } from '../../tools/parseMap'
import { IMap, RowStatus } from '../../types/map.types'
import NewMapItem from '../../tools/newMapItem'
import createNewInMap from '../../tools/createNewInMap'
import clearMap from '../../tools/clearMap'

interface NodesState {
  map: IMap | null
  erid: EidModel | null
}

const initialState: NodesState = {
  map: null,
  erid: null
}

const nodeSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    edit(state, { payload: id }: PayloadAction<number>) {
      clearMap(state.map)
      state.map?.items.forEach((em) => {
        em.status = em.id === id ? RowStatus.edit : RowStatus.ready
        return em
      })
    },
    addrow(state, { payload: parentId }: PayloadAction<number>) {
      if (parentId) {
        clearMap(state.map)
        const newItem = NewMapItem(-1, '', RowStatus.new)
        newItem.parentId = parentId
        newItem.status = RowStatus.new
        createNewInMap(state.erid?.id, state.map, newItem)
      }
    },
    clear(state) {
      clearMap(state.map)
      createNewInMap(state.erid?.id, state.map)
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      mainApi.endpoints.EId.matchFulfilled,
      (state, { payload }: PayloadAction<EidModel>) => {
        if (payload) {
          state.erid = payload
        }
      }
    )
    builder.addMatcher(
      mainApi.endpoints.List.matchFulfilled,
      (state, { payload }: PayloadAction<unknown>) => {
        if (state?.erid && payload) {
          state.map = parseMap(state.erid, payload as ListModel[])
        }
      }
    )
  }
})

export default nodeSlice.reducer
export const { edit, addrow, clear } = nodeSlice.actions
