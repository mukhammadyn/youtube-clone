import { useEffect, useState } from "react";
import MainContext from "./main-context";

const MainProvider = ({ children }) => {
  const [openBar, setOpenBar] = useState(true);
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }

    document.body.style.backgroundColor = themeColor === 'dark' ? '#212121' : '#fff'

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setThemeColor(newColorScheme);
      });
  }, [themeColor]);

  return (
    <MainContext.Provider value={{ openBar, setOpenBar, themeColor }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
