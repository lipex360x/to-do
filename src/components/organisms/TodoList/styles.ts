import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    header {
      display: flex;
      margin-top: 4rem;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `}
`
