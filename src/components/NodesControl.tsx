import { FC } from 'react'
import RowsList from './RowsList'
import { useEIdQuery } from '../services/main-api'

const NodesControl: FC = () => {
  const { isSuccess, error, isLoading } = useEIdQuery()

  return (
    <>
      {isLoading && <div className="node-table-loading">Загрузка</div>}
      {isSuccess && <RowsList />}
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  )
}

export default NodesControl
