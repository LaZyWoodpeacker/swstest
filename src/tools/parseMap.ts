import { EidModel } from '../models/EId.model'
import { ListModel } from '../models/List.model'
import { ILines, IMap, MapItem, RowStatus } from '../types/map.types'
import NewMapItem from './newMapItem'

export const parseMap = (root: EidModel, data: ListModel[]): IMap => {
  let rows = 0
  let columns = 0
  const firstNode = NewMapItem(root.id, root.rowName)
  const items: MapItem[] = []
  const lines: ILines = {}
  const createMap = (dataItem: ListModel, mapItem: MapItem) => {
    if (columns <= mapItem.column) columns = mapItem.column
    items.push(mapItem)
    mapItem.rowId = rows
    rows++
    lines[mapItem.column] = rows
    if (dataItem.child?.length) {
      dataItem.child.forEach((item, idx) => {
        const newItem: MapItem = {
          id: item.id,
          rowName: item.rowName,
          equipmentCosts: item.equipmentCosts,
          estimatedProfit: item.estimatedProfit,
          machineOperatorSalary: item.machineOperatorSalary,
          mainCosts: item.mainCosts,
          materials: item.materials,
          mimExploitation: item.mimExploitation,
          overheads: item.overheads,
          salary: item.salary,
          supportCosts: item.supportCosts,
          rowId: -1,
          status: RowStatus.ready,
          parentId: dataItem.id,
          last: idx === dataItem.child.length - 1,
          column: mapItem.column + 1
        }
        createMap(item, newItem)
      })
    }
  }
  createMap({ ...firstNode, child: data }, firstNode)
  return { columns, items, lines, rows }
}
