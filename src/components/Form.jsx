import React, { useState } from "react";

function Form() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  // const [email, setEmail] = useState("");
  // const [reset, setReset] = useState("");
  // const [password, setPassword] = useState("");
  // const [colour, setColour] = useState("");

  // const validate = () => {
  //   let emailInvalid = "";
  //   if (!email.include("@")) {
  //     emailInvalid = "Please enter a valid email";
  //   }
  // };

  const handleChange = (e) => {
    const { email, value } = e.target;
    setFormValues({ ...formValues, [email]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Hello</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Password :
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
        </div>
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
      </form>
    </div>
  );
}

export default Form;
