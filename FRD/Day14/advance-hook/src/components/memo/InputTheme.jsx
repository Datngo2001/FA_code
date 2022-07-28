import React, { useMemo, useState } from "react";

function InputTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [inputNumber, setInputNumber] = useState(0);

  const style = {
    background: darkTheme ? "#333" : "#ddd",
    color: darkTheme ? "#fff" : "#000",
  };

  const sum = useMemo(() => {
    return calculateSum(inputNumber);
  }, [inputNumber]);

  return (
    <div style={style}>
      <h2>Theme</h2>
      <button onClick={() => setDarkTheme((val) => !val)}>Toughle</button>
      <br />
      <br />
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <h2>{sum}</h2>
    </div>
  );
}

function calculateSum(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += i;
  }
  return result;
}

export default InputTheme;
