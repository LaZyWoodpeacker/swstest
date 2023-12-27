import { IMap, RowStatus } from '../types/map.types'

const clearMap = (map: IMap | null) => {
  if (!map) return
  map.items = map.items
    .filter((em) => em.status !== RowStatus.new)
    .map((em) => {
      em.status = RowStatus.ready
      return em
    })
}

export default clearMap
