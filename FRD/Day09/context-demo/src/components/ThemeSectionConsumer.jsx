import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class ThemeSectionConsumer extends Component {
  constructor() {
    super();
    this.getThemeStyle = this.getThemeStyle.bind(this);
  }
  getThemeStyle(darkTheme) {
    return {
      background: darkTheme ? "#555" : "#eee",
      color: darkTheme ? "white" : "black",
      padding: "20px",
      borderRadius: "10px",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <div
            style={this.getThemeStyle(value.darkTheme)}
            onClick={value.tougleDarkTheme}
          >
            ThemeContextConsummer
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeSectionConsumer;
