import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.size.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.medium}
    `}

    img {
      width: 48px;
      height: 48px;
    }
  `}
`
