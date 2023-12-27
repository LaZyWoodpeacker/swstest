import { FC, ReactElement, useRef } from 'react'

interface Props {
  value: number
  disabled?: boolean
  children?: ReactElement
  onSave: () => void
  onEscape: () => void
  onChange: (value: string) => void
}

const NumberInput: FC<Props> = ({ value, onSave, onEscape, onChange }) => {
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className="column number" onMouseUp={(e) => e.stopPropagation()}>
      <div className="wrapper">
        <input
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              onSave()
            } else if (event.key === 'Escape') {
              onEscape()
            }
          }}
          value={value}
          ref={ref}
          type="number"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  )
}

export default NumberInput
