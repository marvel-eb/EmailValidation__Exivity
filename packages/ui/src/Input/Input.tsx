import { ChangeEvent, HTMLAttributes } from 'react'
import styled from 'styled-components'

import { themePalette, themeSpacing, themeBorderRadius } from '../Theme/themeAccessor'

export const INPUT_SELECTOR = 'zl-input'

const StyledInput = styled.input`
  background-color: ${themePalette('neutral', 300)};
  border: none;
  border-radius: ${themeBorderRadius('base')};
  padding: ${themeSpacing('small')};
  width: 400px;

  :focus {
    outline: none;
    outline: 2px solid ${themePalette('primary', 500)};
  }
`

type InputAttributes = Omit<HTMLAttributes<HTMLInputElement>, 'onChange'>


export interface InputProps extends InputAttributes {
  value?: string
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ onChange, ...props }: InputProps) => {
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value, e)
  }

  //



  return (
    
    <StyledInput
      data-testid={INPUT_SELECTOR} 
      {...props} 
      onChange={inputOnChange} 

      />

  

  )
}

// export default Input;
