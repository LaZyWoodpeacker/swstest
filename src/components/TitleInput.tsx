import { FC, ReactElement, useRef } from 'react'

interface Props {
  value: string
  disabled?: boolean
  children?: ReactElement
  onSave: () => void
  onEscape: () => void
  onChange: (value: string) => void
}

const TitleInput: FC<Props> = ({ value, onSave, onEscape, onChange }) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div className="column text" onMouseUp={(e) => e.stopPropagation()}>
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
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      />
    </div>
  )
}

export default TitleInput
