import React from "react";

function SortBox({ options, values, handleSelect }) {
  if (!options || !values) {
    return <div></div>;
  }

  const handleChange = (e) => {
    handleSelect(e.target.value);
  };

  return (
    <select className="form-select" onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={values[index]}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SortBox;
