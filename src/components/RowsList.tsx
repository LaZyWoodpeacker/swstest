import { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store.hooks'
import { RowStatus } from '../types/map.types'
import { IRowDto } from '../models/IRowDto.interface'
import { edit, addrow, clear } from '../store/slices/nodes.slice'
import { useApi } from '../hooks/api.hooks'

import OneRow from './OneRow'
import EditRow from './EditRow'
import createDtoObject from '../tools/createDtoObject'
import useGlobalEscapeOrClick from '../hooks/useGlobalEscapeOrClick'
import isEditMode from '../tools/isEditMode'

interface Props {
  children?: ReactNode
}

const RowsList: FC<Props> = () => {
  const { map, erid } = useAppSelector((store) => store.nodes)
  const dispatch = useAppDispatch()
  const { create, modify, remove, isLoading } = useApi()
  const editMode = isEditMode(map)
  const setGlobalEscapeOrClick = useGlobalEscapeOrClick(editMode)

  const onCreateHandler = (parentId: number) => {
    dispatch(addrow(parentId))
  }
  const onRemoveHandler = (rId: number) => remove({ rId })
  const onSaveHandler = (dto: IRowDto) => {
    const newOrModifiedRow = map?.items.find(
      (item) => item.status === RowStatus.edit || item.status === RowStatus.new
    )
    if (newOrModifiedRow) {
      if (newOrModifiedRow.status === RowStatus.new) {
        const newItem = createDtoObject(erid?.id, dto)
        create({ dto: newItem })
      } else if (newOrModifiedRow.status === RowStatus.edit) {
        const modifyItem = createDtoObject(erid?.id, dto)
        modify({ rId: newOrModifiedRow.id, dto: modifyItem })
      }
    }
  }
  const onEscapeHandler = () => dispatch(clear())
  const onEdit = (id: number) => dispatch(edit(id))

  setGlobalEscapeOrClick(() => dispatch(clear()))

  return (
    <>
      <div
        className="node-table"
        onDoubleClick={(event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation()
          if (!editMode) {
            const div = event.target as HTMLDivElement
            onEdit(Number(div.dataset.row))
          }
        }}
      >
        {isLoading && <div className="node-table-loading">Загрузка</div>}
        <div className="header text-wrap">Уровень</div>
        <div className="header text-wrap">Наименование работ</div>
        <div className="header tr text-wrap">Основная з/п</div>
        <div className="header tr text-wrap">Оборудование</div>
        <div className="header tr text-wrap">Накладные расходы</div>
        <div className="header tr text-wrap">Сметная прибыль</div>
        {map?.items &&
          map.items.map((item) =>
            item.status === RowStatus.edit || item.status === RowStatus.new ? (
              <EditRow
                key={item.id}
                row={item}
                columns={map.columns}
                lines={map.lines}
                onCreate={onCreateHandler}
                onRemove={onRemoveHandler}
                onSave={onSaveHandler}
                onEscape={onEscapeHandler}
                edit={editMode}
              />
            ) : (
              <OneRow
                key={item.id}
                row={item}
                columns={map.columns}
                lines={map.lines}
                onCreate={onCreateHandler}
                onRemove={onRemoveHandler}
                disabled={editMode}
              />
            )
          )}
      </div>
    </>
  )
}

export default RowsList
