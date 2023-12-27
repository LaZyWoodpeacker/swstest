import { FC } from 'react'
import { ConnectLineType } from '../types/liner.type'

interface Params {
  size?: number
  type?: ConnectLineType
}

const makeDiv = (type: ConnectLineType): JSX.Element => {
  if (type === ConnectLineType.cross)
    return (
      <div className="line">
        <div className="middle"></div>
        <div className="cross"></div>
      </div>
    )
  if (type === ConnectLineType.end)
    return (
      <div className="line">
        <div className="top"></div>
        <div className="cross"></div>
      </div>
    )
  if (type === ConnectLineType.middle)
    return (
      <div className="line">
        <div className="middle"></div>
      </div>
    )
  return (
    <div className="line">
      <div>&nbsp;</div>
    </div>
  )
}

const LinerColumn: FC<Params> = ({ size = 25, type = ConnectLineType.none }) => {
  return (
    <div
      className="liner"
      style={{
        width: `${size}px`
      }}
    >
      {makeDiv(type)}
    </div>
  )
}

export default LinerColumn
