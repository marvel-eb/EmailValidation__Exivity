//
import { useState } from "react";

import { ChangeEvent, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import {
  themePalette,
  themeSpacing,
  themeBorderRadius,
} from "../Theme/themeAccessor";
export const INPUT_SELECTOR = "zl-input";

const StyledInput = styled.input`
  background-color: ${themePalette("neutral", 300)};
  border: none;
  margin-bottom:15px;
  border-radius: ${themeBorderRadius("base")};
  padding: ${themeSpacing("small")};
  width: 400px;

  :focus {
    outline: none;
    outline: 2px solid ${themePalette("primary", 500)};
  }
`;

//
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
type InputAttributes = Omit<HTMLAttributes<HTMLInputElement>, "onChange">;
export interface InputProps extends InputAttributes {
  value?: string;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ onChange, ...props }: InputProps) => {
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value, e);
  };

  //
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  // Regular Expression (A sequence of characters that specifies a search pattern)
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
    <>
        {/* Option 01 */}
      <StyledInput
        data-testid={INPUT_SELECTOR}
        {...props}
        onChange={inputOnChange}
      />
   
   <br />
       {/* Option 02 */}
     <input placeholder="Enter Your Email" onChange={validateEmail} />
      <MessageWrapper
        addCSS={`${isValid ? "color:rgb(17, 172, 3)" : "color:rgb(243, 0, 0)"}`}
      >
        {message}
      </MessageWrapper>
      {/* //  STYLES = Success / Error Messages Goes Here  */}
      {/* <div className={`message ${isValid ? "successMessage" : "errorMessage"}`}>
        {message}
      </div> */}
    </>
  );
};
