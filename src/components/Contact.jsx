import React, { useState, useEffect } from "react";
import "../App.css";

function Contact() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formColour, setFormColour] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [selectAnimals, setSelectAnimals] = useState({
    bear: false,
    snake: false,
    donkey: false,
    tiger: false,
  });
  const [tigerType, setTigerType] = useState(false);
  const [newTigerType, setNewTigerType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeColour = (e) => {
    setFormColour(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleTigerType = (e) => {
    setNewTigerType(e.target.value);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const keys = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!keys.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    return errors;
  };

  const handleOnChange = (animal) => {
    let updatedSelectAnimals = selectAnimals;
    updatedSelectAnimals[animal] = !updatedSelectAnimals[animal];

    setSelectAnimals(updatedSelectAnimals);
    setTigerType(updatedSelectAnimals.tiger);
  };

  let finalAnimal = "";

  for (const [key, value] of Object.entries(selectAnimals)) {
    if (value) {
      const textToAdd = finalAnimal === "" ? key : ", " + key;
      finalAnimal += textToAdd;
    }
  }

  return (
    <div className="container" data-testid="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-divider">
          <div className="form-row">
            <label>Email :</label>
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="form-row">
            <label className="form-row-pw">Password : </label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div>
            <label className="form-row">
              Colour :
              <select
                className="form-input"
                value={formColour}
                onChange={handleChangeColour}
              >
                <option defaultChecked="blue">Please select a colour</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
              </select>
            </label>
          </div>
          <p>{formErrors.colour}</p>
          <div className="form-row">
            <label>Animal : </label>
            <label>
              <input
                type="checkbox"
                label="bear"
                value={selectAnimals.bear}
                onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
              />{" "}
              Bear
            </label>
            <label>
              <input
                type="checkbox"
                label="snake"
                value={selectAnimals.snake}
                onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
              />{" "}
              Snake
            </label>
            <label>
              <input
                type="checkbox"
                label="donkey"
                value={selectAnimals.donkey}
                onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
              />{" "}
              Donkey
            </label>
            <label>
              <input
                type="checkbox"
                label="tiger"
                value={selectAnimals.tiger}
                onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
              />{" "}
              Tiger
            </label>
            <div className="form-row-tiger">
              <div></div>
              {tigerType ? (
                <p>
                  Type of Tiger : {""}
                  <input placeholder="type" onChange={handleTigerType}></input>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
      <div className="form-row">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>
            Thank you! You have submitted with <em>{formValues.email}</em>{" "}
            <br />
            Colour : {formColour}
            <br /> Animal(s) :
          </div>
        ) : null}
        {finalAnimal}
        {newTigerType ? " - " + newTigerType : ""}
      </div>
    </div>
  );
}

export default Contact;
