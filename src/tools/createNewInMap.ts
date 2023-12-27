import { ILines, IMap, MapItem } from '../types/map.types'

const createNewInMap = (rootId: number | undefined, map: IMap | null, newItem?: MapItem): void => {
  if (!(rootId && map)) return
  const plain: MapItem[] = JSON.parse(JSON.stringify(map.items)) || []
  const root: MapItem | undefined = plain.find((em) => em.id === rootId)
  if (newItem) plain.push(newItem)
  if (root) {
    let rows = 0
    let columns = 0
    const items: MapItem[] = []
    const lines: ILines = {}
    const createInMap = (mapItem: MapItem) => {
      if (columns <= mapItem.column) columns = mapItem.column
      mapItem.rowId = rows
      items.push(mapItem)
      rows++
      lines[mapItem.column] = rows
      plain
        ?.filter((em) => em.parentId == mapItem.id)
        .forEach((item, idx, arr) => {
          item.column = mapItem.column + 1
          item.last = idx === arr.length - 1
          createInMap(item)
        })
    }
    createInMap(root)
    map.items = items
    map.columns = columns
    map.rows = rows
    map.lines = lines
  }
}

export default createNewInMap
