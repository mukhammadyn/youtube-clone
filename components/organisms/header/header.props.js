import { useEffect, useState } from "react"

export const useHeaderProps = () => {
  const [isOpen, setOpen] = useState(false)

  // useEffect(() => {
  //   if(window.innerHeight <= 500) {
  //     setOpen(true)
  //   }
  // }, [])

  return {
    isOpen,
    setOpen,
  }
}