import React from "react"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.lightblue};
  font-size: ${(props) => props.theme.fontSize.p};
  color: #fff;
  outline: none;
  border: none;
  padding: 5px 20px;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;


  ${({ heart }) =>
    heart &&
    css`
      background-color: #fff;
      border: 1px solid ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
      z-index: 1;
      &:hover {
        background-color: ${(props) => props.theme.colors.red};
        color: #fff;
      }
    `}
  ${({ small }) =>
    small &&
    css`
      padding: 5px 10px;
      font-size: 10px;
      background-color: #fff;
      border: 1px solid ${(props) => props.theme.colors.lightblue};
      color: ${(props) => props.theme.colors.lightblue};
    `}

  ${({active}) =>
    active &&
    css `
      background-color: ${(props) => props.theme.colors.lightblue};
      color: #ffffff;
    `
  }
`

const Button = ({ children, heart, small, option, name, active }) => {
  return (
    <StyledButton active={active} small={small} heart={heart} onClick={() => option(name)}>
      {children}
    </StyledButton>
  )
}

export default Button
