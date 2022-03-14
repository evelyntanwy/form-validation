import React, { useState } from "react";

function Animal() {
  const [selectAnimals, setSelectAnimals] = useState({
    bear: false,
    tiger: false,
    snake: false,
    donkey: false,
  });

  const [tigerType, setTigerType] = useState(false);

  const handleOnChange = (animal) => {
    let updatedSelectAnimals = selectAnimals;
    updatedSelectAnimals[animal] = !updatedSelectAnimals[animal];

    setSelectAnimals(updatedSelectAnimals);
    setTigerType(updatedSelectAnimals.tiger);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          label="bear"
          value={selectAnimals.bear}
          onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
        />{" "}
        Bear
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          label="tiger"
          value={selectAnimals.tiger}
          onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
        />{" "}
        Tiger
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          label="snake"
          value={selectAnimals.snake}
          onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
        />{" "}
        Snake
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          label="donkey"
          value={selectAnimals.donkey}
          onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
        />{" "}
        Donkey
      </label>
      {tigerType ? (
        <p>
          Type of Tiger<input placeholder="type"></input>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Animal;
