import { useState } from 'react'

export const useFilterForm = () => {
  const [title, setTitle] = useState('')
  const [sortBy, setSortBy] = useState('popularity.desc')
  const [isAdult, setIsAdult] = useState(false)
  const setFilter = (title: string, sortBy: string, isAdult: boolean) => {
    setTitle(title)
    setSortBy(sortBy)
    setIsAdult(isAdult)
  }
  return {
    title,
    sortBy,
    isAdult,
    setFilter,
  }
}
