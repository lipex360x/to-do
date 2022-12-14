import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: ${theme.color['gray-500']};
    color: ${theme.color['gray-100']};

    &::placeholder{
      color: ${theme.color['gray-300']}
    }
  `}
`
