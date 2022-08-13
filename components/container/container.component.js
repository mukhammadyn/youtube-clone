import { useContext } from "react"
import MainContext from "../../context/main-context"
import { ContainerWrapper } from "./container.style"

const Container = ({children}) => {
  const {themeColor} = useContext(MainContext)
  return <ContainerWrapper themeColor={themeColor}>{children}</ContainerWrapper>
}

export default Container