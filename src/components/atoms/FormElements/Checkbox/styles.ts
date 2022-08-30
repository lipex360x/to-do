import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${theme.color.blue};
    border-radius: 50%;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 6px;
      height: 9px;
      border: 2px solid ${theme.color.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:hover {
      border-color: ${theme.color['blue-dark']};
      background: ${theme.color['blue-dark'] + '40'};
    }

    &:checked {
      border-color: ${theme.color['purple-dark']};
      background-color: ${theme.color['purple-dark']};
      &:before {
        opacity: 1;
      }

      &:hover {
        border-color: ${theme.color.purple};
        background: ${theme.color.purple};
      }
    }

  `}
`
