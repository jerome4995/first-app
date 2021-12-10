import { objectExpression } from "@babel/types";
import React, { useState, useEffect } from "react";
import { orderRef } from "../../firebase/Firebase";

const FormTest = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});

  const handleInputChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const inValid = formValidation();
  };

  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    let isValid = true;

    if (firstName.trim().length < 5) {
      firstNameErr.firstNameShort = "Firstname Is Too Short";
      isValid = false;
    }
    if (firstName.trim().length < 10) {
      firstNameErr.firstNameBig = "Firstname Is Too Big";
      isValid = false;
    }
    if (!lastName.includes("123")) {
      lastNameErr.lastname123 = "LastName Must Have 123";
      isValid = false;
    }
    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    return isValid;
  };

  return (
    <div>
      <form>
        <label>
          Enter your Firstname:
          <input
            type="text"
            value={firstName}
            name="firstName"
            onchange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <br />
        {Object.keys(firstNameErr).map((key) => {
          return <div style={{ color: "red" }}>{firstNameErr[key]}</div>;
        })}
        <label>Enter your Lastname </label>
        <input
          type="text"
          value={lastName}
          name="lastName"
          onchange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        {Object.keys(lastNameErr).map((key) => {
          return <div style={{ color: "red" }}>{lastNameErr[key]}</div>;
        })}
        <label>
          <input type="button" value="submit" onClick={handleSubmit} />
        </label>
      </form>
    </div>
  );
};

export default FormTest;
