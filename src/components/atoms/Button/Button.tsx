import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonsTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'default'
  fullWidth?: boolean
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  minimal?: boolean
} & ButtonsTypes

export const Button: React.ForwardRefRenderFunction<
  S.WrapperProps,
  ButtonProps
> = ({
  children,
  fullWidth,
  icon,
  minimal,
  variant = 'default',
  iconPosition = 'left',
  size = 'medium',
  ...props
}: ButtonProps) => (
    <S.Wrapper
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      iconPosition={iconPosition}
      minimal={minimal}
      {...props}
    >
      {!!icon && iconPosition === 'left' && icon}
      {!!children && <span>{children}</span>}
      {!!icon && iconPosition === 'right' && icon}
    </S.Wrapper>
  )
