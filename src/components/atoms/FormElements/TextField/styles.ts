import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: ${theme.color['gray-900']};
    color: ${theme.color['gray-300']};

    &::placeholder{
      color: ${theme.color['gray-500']}
    }
  `}
`
