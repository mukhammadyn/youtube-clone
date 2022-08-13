import { useState } from "react";
import MainContext from "./main-context";

const MainProvider = ({children}) => {

  const [openBar, setOpenBar] = useState(true)

  return <MainContext.Provider value={{openBar, setOpenBar}}>
    {children}
  </MainContext.Provider>
}

export default MainProvider