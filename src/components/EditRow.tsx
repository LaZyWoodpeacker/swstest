import { FC, useState } from 'react'
import { IRowDto } from '../models/IRowDto.interface'
import RowIcons from './RowIcons'
import NumberInput from './NumberInput'
import TitleInput from './TitleInput'
import { ILines, MapItem } from '../types/map.types'

interface Props {
  row: MapItem
  columns: number
  onCreate: (id: number) => void
  onRemove: (id: number) => void
  onSave: (dto: IRowDto) => void
  onEscape: () => void
  edit: boolean
  lines: ILines
}

const EditRow: FC<Props> = ({
  row,
  lines,
  columns,
  edit,
  onCreate,
  onRemove,
  onEscape,
  onSave
}) => {
  const [changeDto, setChangeDto] = useState<IRowDto>({
    id: row.id,
    rowName: row.rowName,
    parentId: row.parentId,
    equipmentCosts: row.equipmentCosts,
    estimatedProfit: row.estimatedProfit,
    overheads: row.overheads,
    salary: row.salary,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0
  })

  const onChangeHandler = (name: string, value: string | number) => {
    setChangeDto({ ...changeDto, [name]: value })
  }

  const onSaveHandler = () => {
    if (typeof changeDto.rowName === 'string' && changeDto.rowName.length) onSave(changeDto)
  }

  return (
    <>
      <div className="icons">
        <RowIcons
          key={row.id}
          columns={columns}
          lines={lines}
          row={row}
          onCreate={() => onCreate(row.id)}
          onRemove={() => onRemove(row.id)}
          edit={edit}
        />
      </div>
      <TitleInput
        value={changeDto.rowName}
        onEscape={() => onEscape()}
        onSave={() => onSaveHandler()}
        onChange={(value: string | number) => onChangeHandler('rowName', value)}
      />
      <NumberInput
        value={Number(changeDto.salary)}
        onEscape={() => onEscape()}
        onSave={() => onSaveHandler()}
        onChange={(value: string | number) => onChangeHandler('salary', value)}
      />
      <NumberInput
        value={Number(changeDto.equipmentCosts)}
        onEscape={() => onEscape()}
        onSave={() => onSaveHandler()}
        onChange={(value: string | number) => onChangeHandler('equipmentCosts', value)}
      />
      <NumberInput
        value={Number(changeDto.overheads)}
        onEscape={() => onEscape()}
        onSave={() => onSaveHandler()}
        onChange={(value: string | number) => onChangeHandler('overheads', value)}
      />
      <NumberInput
        value={Number(changeDto.estimatedProfit)}
        onEscape={() => onEscape()}
        onSave={() => onSaveHandler()}
        onChange={(value: string | number) => onChangeHandler('estimatedProfit', value)}
      />
    </>
  )
}

export default EditRow
