import { MapItem, RowStatus } from '../types/map.types'

const NewMapItem = (id: number, rowName: string, status = RowStatus.ready): MapItem => ({
  id: id,
  rowName: rowName,
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  parentId: 0,
  salary: 0,
  supportCosts: 0,
  last: false,
  status,
  column: 0,
  rowId: 0
})

export default NewMapItem
