import React, { useState } from "react";

function Animal() {
  //   const [animal, setAnimal] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const handleInputChange = (evt) => {
    console.log(evt.target.name);
    setIsCheck(evt.target.name);
  };

  return (
    <div>
      <form>
        {/* <label>
          Animals :
          <select
            onChange={(evt) => {
              const selectedAnimal = evt.target.value;
              setAnimal(selectedAnimal);
            }}
          >
            <option value="Bear">Bear</option>
            <option value="Tiger">Tiger</option>
            <option value="Snake">Snake</option>
            <option value="Donkey">Donkey</option>
          </select>
        </label> */}
        <h4>Animal :</h4>
        <input name="Bear" type="checkbox" onChange={handleInputChange} />
        Bear
        <input name="Tiger" type="checkbox" onChange={handleInputChange} />
        Tiger
        <input name="Snake" type="checkbox" onChange={handleInputChange} />
        Snake
        <input name="Donkey" type="checkbox" onChange={handleInputChange} />
        Donkey
      </form>
      <div>
        {`${isCheck == "Tiger" ? true : false}`}
        {/* {isCheck.includes === "Tiger" ? (
          <p>
            Type of Tiger <input placeholder="type"></input>
          </p>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}

export default Animal;
