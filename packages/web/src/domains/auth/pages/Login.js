import React, { useState } from "react";

////////////////////////////////////////////////////
// Import Styleshee // EPHREM
import "../../../Styles/main.css";

import styled from "styled-components";
import { Panel, Input } from "@zealous/ui";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
`;
///////////////////////////////////////// EPHREM
// Functional Component (arrow Function)
// const LoginPage = () => {
// function  LoginPage(){
export function LoginPage() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const result =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = (e) => {
    const email = e.target.value;
    if (result.test(email)) {
      setIsValid(true);
      setMessage("Awesome, Your Email Address looks good.");
    } else {
      setIsValid(false);
      setMessage("Sorry, Please Enter a valid Email Address.");
    }
  };

  return (
    <Layout>
      <Panel>
        {/* <Input placeholder="Enter Your Email Address" /> */}

        <input
          className="emailInput"
          type="email"
          placeholder="Enter your email"
          onChange={validateEmail}
        />

        {/* Success / Error Messages Goes Here */}

        <div
          className={`message ${isValid ? "successMessage" : "errorMessage"}`}
        >
          {message}
        </div>
      </Panel>
    </Layout>
  );
}

// export default LoginPage;
