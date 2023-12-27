import { IMap, RowStatus } from '../types/map.types'

const isEditMode = (map: IMap | null): boolean =>
  !!map?.items?.find((item) => item.status === RowStatus.edit || item.status === RowStatus.new)

export default isEditMode
