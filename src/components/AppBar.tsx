import { FC } from 'react'
import menuIcon from '../assets/menu-grid.svg'
import arrowIcon from '../assets/arrow-back.svg'

const AppBar: FC = () => {
  return (
    <div className="app-bar">
      <div className="app-bar-icons">
        <img src={menuIcon} className="app-bar-icons_icon" alt="menuIcon" />
        <img src={arrowIcon} className="app-bar-icons_icon" alt="arrowIcon" />
      </div>
      <nav>
        <ul className="app-bar-menu">
          <li className="app-bar-menu_button app-bar-menu_button__active">Просмотр</li>
          <li className="app-bar-menu_button">Управление</li>
        </ul>
      </nav>
    </div>
  )
}

export default AppBar
