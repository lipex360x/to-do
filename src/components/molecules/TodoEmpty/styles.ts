import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.color['gray-300']};
    height: 16rem;
    border-top: 1px solid ${theme.color['gray-400']};
    border-radius: 8px;

    img {
      margin-bottom: 1rem;
    }
  `}
`
