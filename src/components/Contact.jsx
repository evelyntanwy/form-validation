import React, { useState, useEffect } from "react";
import "../App.css";

function Contact() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [selectAnimals, setSelectAnimals] = useState({
    bear: false,
    tiger: false,
    snake: false,
    donkey: false,
  });
  const [tigerType, setTigerType] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div>
            <label>
              Colour :
              <select>
                <option defaultChecked="blue">Please select a colour</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
              </select>
            </label>
          </div>
          <div>
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
                label="tiger"
                value={selectAnimals.tiger}
                onChange={(e) => handleOnChange(e.target.getAttribute("label"))}
              />{" "}
              Tiger
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
            {tigerType ? (
              <p>
                Type of Tiger<input placeholder="type"></input>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <button>Submit</button>
      </form>

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>You have successfully Sign-in with {formValues.email} </div>
      ) : null}
    </div>
  );
}

export default Contact;
