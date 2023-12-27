import FoldIcon from '../assets/fold.svg'
import LayoutIcon from '../assets/layout.svg'

const Icon = () => <img src={LayoutIcon} alt="fold" className="drawer-list_icon" />

const DrawerMenu = () => {
  return (
    <div className="drawer">
      <div className="drawer-header">
        <div>
          <div className="drawer-header_title">Название продукта</div>
          <div className="drawer-header_subtitle">Аббревиатура</div>
        </div>
        <img src={FoldIcon} alt="fold" className="drawer-header_icon" />
      </div>
      <ul className="drawer-list">
        <li className="drawer-list_item">
          <Icon />
          По проекту
        </li>
        <li className="drawer-list_item">
          <Icon />
          Объекты
        </li>
        <li className="drawer-list_item">
          <Icon />
          РД
        </li>
        <li className="drawer-list_item">
          <Icon />
          МТО
        </li>
        <li className="drawer-list_item drawer-list_item__active">
          <Icon />
          СМР
        </li>
        <li className="drawer-list_item">
          <Icon />
          График
        </li>
        <li className="drawer-list_item">
          <Icon />
          МиМ
        </li>
        <li className="drawer-list_item">
          <Icon />
          Рабочие
        </li>
        <li className="drawer-list_item">
          <Icon />
          Капвложения
        </li>
        <li className="drawer-list_item">
          <Icon />
          Бюджет
        </li>
        <li className="drawer-list_item">
          <Icon />
          Финансирование
        </li>
        <li className="drawer-list_item">
          <Icon />
          Панорамы
        </li>
        <li className="drawer-list_item">
          <Icon />
          Камеры
        </li>
        <li className="drawer-list_item">
          <Icon />
          Поручения
        </li>
        <li className="drawer-list_item">
          <Icon />
          Контрагенты
        </li>
      </ul>
    </div>
  )
}

export default DrawerMenu
