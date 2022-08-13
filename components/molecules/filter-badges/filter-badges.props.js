import { useEffect, useState } from "react"

export const useFilterBadgesProps = ({categories}) => {
  const [active, setActive] = useState({id: 'XtTd'})

  const handleCategoriesClick = (e) => {
    if(e.target.matches('button[id]')) {
      setActive(categories.find(category => category.id === e.target.id))
    }
  }

  useEffect(() => {
    if(categories.length > 0) setActive(categories[0])
  }, [categories])

  return {
    active,
    setActive,
    handleCategoriesClick,
  }
}