import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class ThemeSectionClass extends Component {
  static contextType = ThemeContext;

  render() {
    const { darkTheme, tougleDarkTheme } = this.context;
    const themeStyle = {
      background: darkTheme ? "#555" : "#eee",
      color: darkTheme ? "white" : "black",
      padding: "20px",
      borderRadius: "10px",
    };
    return (
      <div onClick={tougleDarkTheme} style={themeStyle}>
        ThemeSectionClass
      </div>
    );
  }
}

export default ThemeSectionClass;
