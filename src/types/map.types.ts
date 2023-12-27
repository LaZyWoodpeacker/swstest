export const enum RowStatus {
  new,
  edit,
  ready
}

export interface ILines {
  [key: number]: number
}

export interface MapItem {
  id: number
  rowName: string
  equipmentCosts: number
  estimatedProfit: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  parentId: number
  salary: number
  supportCosts: number
  last: boolean
  status: RowStatus
  column: number
  rowId: number
}

export interface IMap {
  items: MapItem[]
  rows: number
  columns: number
  lines: ILines
}
