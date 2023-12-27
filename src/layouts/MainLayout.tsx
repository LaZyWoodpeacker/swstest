import { FC, ReactNode } from 'react'
import AppBar from '../components/AppBar'
import DrawerMenu from '../components/DrawerMenu'

interface MainLayoutProps {
  debug?: boolean
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar />
      <div style={{ height: '100%', display: 'flex', flexGrow: 1, alignItems: 'stretch' }}>
        <DrawerMenu />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div className="top-row">
            <div className="top-row_title">Строительно монтажные работы</div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
export default MainLayout
