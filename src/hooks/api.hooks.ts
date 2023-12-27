import {
  useCreateMutation,
  useDeleteMutation,
  useListQuery,
  useModifyMutation
} from '../services/main-api'

export const useApi = () => {
  const { isLoading: isLoadingQuery } = useListQuery()
  const [create, { isLoading: isLoadingCreate }] = useCreateMutation()
  const [modify, { isLoading: isLadingModify }] = useModifyMutation()
  const [remove, { isLoading: isLadingRemove }] = useDeleteMutation()

  const isLoading = isLoadingCreate || isLoadingQuery || isLadingModify || isLadingRemove
  return { create, modify, remove, isLoading }
}
