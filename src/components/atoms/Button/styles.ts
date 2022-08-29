import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

export type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

const wrapperModifiers = {
  small: () => css`
    padding: 0.5rem 1.25rem;
  `,

  medium: () => css`
    padding: 0.75em 1rem;
  `,


  default: (theme: DefaultTheme) => css`
    background: ${theme.color['info-600']};

    &:not(:disabled):hover {
      background: ${theme.color['info-500']};
    }
  `,

  withIcon: (theme: DefaultTheme, position: 'left' | 'right') => css`
    span {
      display: inline-block;
      margin-left: ${position === 'left' && theme.spacing.xxsmall};
      margin-right: ${position === 'right' && theme.spacing.xxsmall};
    }
    svg {
        width: 1.5rem;
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.color['gray-300']};
    border: 2px solid ${theme.color['gray-500']};
    transition: background, color ${theme.transition.fast};

    &:not(:disabled):hover{
      color: ${theme.color.white};
      background: ${theme.color['gray-500']};
    }
  `,

  fullWidth: () => css`
    flex: 1;
    text-align: center;
  `,
}

export const ButtonBase = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: ${theme.color['gray-100']};
    font-weight: ${theme.font.bold};

    border-radius: ${theme.border.radius.soft};
    transition: background-color ${theme.transition.fast};
  `}
`

export const Wrapper = styled(ButtonBase) <WrapperProps>`
  ${({
  theme,
  size,
  fullWidth,
  hasIcon,
  iconPosition,
  minimal,
  variant
}) => css`
    ${!!variant && wrapperModifiers[variant](theme)}
    ${!!size && wrapperModifiers[size]}
    ${!!hasIcon && !!iconPosition && wrapperModifiers.withIcon(theme, iconPosition)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
  `}
`
