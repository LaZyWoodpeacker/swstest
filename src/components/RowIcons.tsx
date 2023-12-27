import { FC, useState } from 'react'
import DocumentIcon from './DocumentIcon'
import RemoveIcon from './RemoveIcon'
import LinerColumn from './LinerColumn'
import { ILines, MapItem } from '../types/map.types'
import { ConnectLineType } from '../types/liner.type'

interface Props {
  row: MapItem
  columns: number
  onCreate: () => void
  onRemove: () => void
  edit: boolean
  lines: ILines
}

const RowIcons: FC<Props> = ({ onCreate, onRemove, edit = false, row, lines }) => {
  const [hoverState, setHoverState] = useState(false)
  const iconSize = 30
  const isRoot = !row.column

  const drawLines = (): ConnectLineType[] => {
    if (isRoot) return []
    const drawColumns: ConnectLineType[] = Array(row.column)
      .fill(0)
      .map((_, column) =>
        row.rowId && row.rowId < lines[column + 1] ? ConnectLineType.middle : ConnectLineType.none
      )
    drawColumns[row.column - 1] = row.last ? ConnectLineType.end : ConnectLineType.cross
    return drawColumns
  }

  return (
    <>
      <div
        style={{ display: 'flex' }}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        {drawLines().map((lineType, idx) => {
          return <LinerColumn key={idx} type={lineType} />
        })}
        <div style={{ display: 'flex', position: 'relative' }}>
          {<DocumentIcon size={iconSize} onClick={() => !edit && onCreate()} />}
          {hoverState && !edit && !isRoot && (
            <RemoveIcon size={iconSize} onClick={() => onRemove()} />
          )}
        </div>
      </div>
      <div className="placeholder">&nbsp;</div>
    </>
  )
}

export default RowIcons
