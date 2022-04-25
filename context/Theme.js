import { createContext, useState } from "react";

const theme = {
  dark: {
    backgroundColor: "#2a2929",
    color: "white",
  },
  light: {
    backgroundColor: "#009FB7",
    color: "black",
  },
};
export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [stheme, setSTheme] = useState(theme.dark);
  const toggle = () => {
    stheme.backgroundColor === "#2a2929"
      ? setSTheme(theme.light)
      : setSTheme(theme.dark);
  };
  return (
    <ThemeContext.Provider value={{ stheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
