import React, { createContext } from "react";

export const themes = {
    light: {
        backgroundColor: "rgb(5, 44, 44)",
        color: "white",
      },
      dark: {
        backgroundColor: "rgb(6, 199, 199)",
        color: "black",
      },
};
const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
