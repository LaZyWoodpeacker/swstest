import { useEffect, useRef } from 'react'

const useGlobalEscapeOrClick = (editMode: boolean) => {
  const fnk = useRef<(() => void) | null>(null)

  const setGlobalEscapeOrClick = (callback: () => void) => {
    fnk.current = callback
  }

  useEffect(() => {
    const globalClickHandler = () => {
      if (typeof fnk.current === 'function' && editMode) {
        fnk.current()
      }
    }
    const globalEscapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        globalClickHandler()
      }
    }
    window.addEventListener('mouseup', globalClickHandler)
    window.addEventListener('keyup', globalEscapeHandler)
    return () => {
      window.removeEventListener('mouseup', globalClickHandler)
      window.addEventListener('keyup', globalEscapeHandler)
    }
  }, [editMode])

  return setGlobalEscapeOrClick
}

export default useGlobalEscapeOrClick
