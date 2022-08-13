import { useContext, useEffect, useState } from "react"
import MainContext from "../../../context/main-context"

export const useFilterBadgesProps = ({categories}) => {
  const [active, setActive] = useState({id: 'XtTd'})

  const {themeColor} = useContext(MainContext)

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
    themeColor,
    setActive,
    handleCategoriesClick,
  }
}