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

  //   const [isCheck, setIsCheck] = useState([]);
  //   const [isTiger, setIsTiger] = useState(false);

  //   const handleInputChange = (evt) => {
  //     console.log(evt.target.value);
  //     setIsCheck([...isCheck, evt.target.value]);
  //   };

  //   const handleTiger = (evt) => {
  //     setIsTiger(!isTiger);
  //   };

  return (
    <div>
      {/* <form>
        <label>Animal :</label>
        <input value="Bear" type="checkbox" onChange={handleInputChange} />
        Bear
        <input value="Tiger" type="checkbox" onChange={handleTiger} />
        Tiger
        <input value="Snake" type="checkbox" onChange={handleInputChange} />
        Snake
        <input value="Donkey" type="checkbox" onChange={handleInputChange} />
        Donkey
        <div>
          {isTiger ? (
            <p>
              Type of Tiger<input placeholder="type"></input>
            </p>
          ) : (
            ""
          )}
        </div>
      </form> */}
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
