import React, { useState } from "react";

function MyList() {
  const [listName, setListName] = useState([
    { id: 123, name: "Dat" },
    { id: 444, name: "Tan" },
    { id: 125553, name: "Thuan" },
  ]);

  const handleClick = (name) => {
    console.log("Inside handleClick", name);
    let newPerson = {
      id: 555,
      name: "Quang",
    };
    setListName([...listName, newPerson]);
  };
  return (
    <div>
      {listName.map((person) => {
        return (
          <button key={person.id} onClick={() => handleClick(person.id)}>
            {person.name}
          </button>
        );
      })}
    </div>
  );
}

export default MyList;
