import { IRowDto } from '../models/IRowDto.interface'

const createDtoObject = (eId: number | undefined, dto: IRowDto): IRowDto => ({
  rowName: dto.rowName,
  equipmentCosts: dto.equipmentCosts,
  estimatedProfit: dto.estimatedProfit,
  overheads: dto.overheads,
  parentId: eId === dto.parentId ? null : dto.parentId,
  salary: dto.salary,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  supportCosts: 0
})

export default createDtoObject
