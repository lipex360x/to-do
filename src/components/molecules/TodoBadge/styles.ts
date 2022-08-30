import styled, { css } from 'styled-components'
import { TodoBadgeProps } from './TodoBadge'

type WrapperProps = Pick<TodoBadgeProps, 'color'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;

    strong {
      color: ${color === 'blue' ? theme.color.blue : theme.color.purple};
    }
    span {
      display: inline-block;
      background: ${theme.color['gray-600']};
      font-weight: bold;
      padding: 0.2rem 0.6rem;
      border-radius: 50%
    }
  `}
`
