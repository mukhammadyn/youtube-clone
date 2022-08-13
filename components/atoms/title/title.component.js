import { useContext } from "react"
import MainContext from "../../../context/main-context"
import { Wrapper } from "./title.style"

export const Title = ({children}) => {
  const {themeColor} = useContext(MainContext)
  return <Wrapper themeColor={themeColor}>{children}</Wrapper>
}
