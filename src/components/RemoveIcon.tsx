import { FC, useState } from 'react'

interface Props {
  size: number
  onClick: () => void
}

const RemoveIcon: FC<Props> = ({ size = 40, onClick }) => {
  const [hoverState, setHoverState] = useState('white')

  return (
    <div className="remove">
      <svg
        onMouseEnter={() => setHoverState('red')}
        onMouseLeave={() => setHoverState('white')}
        onClick={() => onClick()}
        style={{ cursor: 'pointer' }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
      >
        <path
          d="M11.188 4.781c6.188 0 11.219 5.031 11.219 11.219s-5.031 11.188-11.219 11.188S0 22.188 0 16 5 4.781 11.188 4.781zm.062 12.844l3.563 3.594a1.131 1.131 0 001.594 0c.406-.406.406-1.125 0-1.563l-3.563-3.594 3.563-3.594c.406-.438.406-1.156 0-1.563a1.131 1.131 0 00-1.594 0l-3.563 3.594-3.563-3.594a1.131 1.131 0 00-1.594 0c-.406.406-.406 1.125 0 1.563l3.563 3.594-3.563 3.594c-.406.438-.406 1.156 0 1.563a1.131 1.131 0 001.594 0z"
          fill={hoverState}
        ></path>
      </svg>
    </div>
  )
}

export default RemoveIcon
