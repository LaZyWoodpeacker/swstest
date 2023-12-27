import { FC, useState } from 'react'

interface Props {
  size: number
  onClick: () => void
}

const DocumentIcon: FC<Props> = ({ size = 40, onClick }) => {
  const [hoverState, setHoverState] = useState('#7890b2')

  return (
    <div className="icon">
      <svg
        onMouseEnter={() => setHoverState('white')}
        onMouseLeave={() => setHoverState('#7890b2')}
        onClick={() => onClick()}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={hoverState}
        viewBox="0 0 24 24"
        style={{ cursor: 'pointer' }}
      >
        <path
          fill="#323232"
          d="M17.828 6.828c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17V7c0-1.886 0-2.828.586-3.414C6.172 3 7.114 3 9 3h3.343c.818 0 1.226 0 1.594.152.368.152.657.442 1.235 1.02l2.656 2.656z"
          opacity="0.1"
        ></path>
        <path
          stroke="#323232"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.828 6.828c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17V7c0-1.886 0-2.828.586-3.414C6.172 3 7.114 3 9 3h3.343c.818 0 1.226 0 1.594.152.368.152.657.442 1.235 1.02l2.656 2.656z"
        ></path>
        <path
          stroke="#323232"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6M9 15h6"
        ></path>
      </svg>
    </div>
  )
}

export default DocumentIcon
