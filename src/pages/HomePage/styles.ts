import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    height: 100vh;
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
