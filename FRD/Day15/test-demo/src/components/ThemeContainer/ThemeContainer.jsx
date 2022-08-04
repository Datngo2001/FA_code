import React, { useState } from "react";

function ThemeContainer() {
  const [allowToggle, setAllowToggle] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const style = {
    background: darkTheme ? "#333" : "#ddd",
    color: darkTheme ? "#fff" : "#000",
  };
  const toggleTheme = () => {
    setDarkTheme((val) => !val);
  };

  const handleCheck = () => {
    setAllowToggle((val) => !val);
  };

  return (
    <div style={style} data-testid="theme-container">
      ThemeContainer
      <form>
        <label htmlFor="allowToggle">Allow toggle: </label>
        <input
          type="checkbox"
          checked={allowToggle}
          name="allowToggle"
          onChange={handleCheck}
        />
      </form>
      <button onClick={toggleTheme} disabled={!allowToggle}>
        Toggle
      </button>
    </div>
  );
}

export default ThemeContainer;
