import React, { useState } from "react";

function Animal() {
  const [isCheck, setIsCheck] = useState([]);
  const [isTiger, setIsTiger] = useState(false);

  const handleInputChange = (evt) => {
    console.log(evt.target.value);
    setIsCheck([...isCheck, evt.target.value]);
  };

  const handleTiger = (evt) => {
    setIsTiger(!isTiger);
  };

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

export default Animal;
