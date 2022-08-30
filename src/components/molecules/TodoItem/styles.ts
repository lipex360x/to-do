import styled, { css, DefaultTheme } from 'styled-components'

const wrapperModifiers = {
  done: (theme: DefaultTheme) => css`
    span {
      text-decoration: line-through;
      color: ${theme.color['gray-300']}
    }
  `
}

type WrapperProps = {
  isDone: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isDone }) => css`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex:1;
    border: 1px solid ${theme.color['gray-400']};
    background: ${theme.color['gray-500']};
    border-radius: 8px;
    padding: 1rem;

    ${isDone && wrapperModifiers.done(theme)}
  `}
`
