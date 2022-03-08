import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Panel, Input } from "@zealous/ui";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
`;

const MessageWrapper = styled.div`
  ${(props) => props.addCSS}
`;

// const Test = styled.div`
//   ${(props) => props.addCSS}
// `;

// const Input = styled.input`
//   background-color: #eaeaea;
//   border: none;
//   border-radius: 4px;
//   padding: 12px;
//   width: 400px;
//   display: flex;
//   flex-direction: row;
//   margin-top: 10px;
// `;

// const myCSS = css`
//   color: red;
// `;

export function LoginPage() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  // Regular Expression (A sequence of characters that specifies a search pattern in text)
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
        {/* Option 01 */}
        <Input  onChange={validateEmail} placeholder="Enter Your Email Address" />
<br />
        {/* Option 02 */}
          <input
            type="email"
            placeholder="Enter your email"
            onChange={validateEmail}
          />
        <MessageWrapper
          addCSS={`${
            isValid ? "color:rgb(17, 172, 3)" : "color:rgb(243, 0, 0)"
          }`}
        >
          {message}
        </MessageWrapper>
        {/* Reserved */}
        {/* <div
          className={`message ${isValid ? "successMessage" : "errorMessage"}`}
        >
          {message}
        </div> */}
      </Panel>
    </Layout>
  );
}
