import { FC } from 'react'
import RowIcons from './RowIcons'
import { ILines, MapItem } from '../types/map.types'

interface Props {
  row: MapItem
  columns: number
  onCreate: (id: number) => void
  onRemove: (id: number) => void
  disabled: boolean
  lines: ILines
}

const OneRow: FC<Props> = ({ row, lines, columns, disabled, onCreate, onRemove }) => {
  const ListColumn: FC<{ value: string | number | undefined; className: string }> = ({
    value,
    className
  }) => (
    <div className={className} data-row={row.id} style={{ overflow: 'hidden' }}>
      {value}
    </div>
  )

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
          edit={disabled}
        />
      </div>
      <ListColumn value={row.rowName} className="column text text-wrap" />
      <ListColumn value={row.salary} className="column number" />
      <ListColumn value={row.equipmentCosts} className="column number" />
      <ListColumn value={row.overheads} className="column number" />
      <ListColumn value={row.estimatedProfit} className="column number" />
    </>
  )
}

export default OneRow
