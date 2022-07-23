import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeSection() {
  const { darkTheme, tougleDarkTheme } = useContext(ThemeContext);
  const themeStyle = {
    background: darkTheme ? "#555" : "#eee",
    color: darkTheme ? "white" : "black",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <div onClick={tougleDarkTheme} style={themeStyle}>
      ThemeSection
    </div>
  );
}

export default ThemeSection;
