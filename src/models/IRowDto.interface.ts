export interface IRowDto {
  id?: number
  rowName: string
  salary: number
  equipmentCosts?: number
  overheads: number
  estimatedProfit?: number
  parentId: number | null
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  supportCosts: number
}
