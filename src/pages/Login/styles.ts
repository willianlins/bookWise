import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ContentLeft = styled.div`
  height: 57rem;
  @media (max-width: 1250px) {
    display: none;
  }
`

export const ContentRight = styled.div`
  margin-left: 14.125rem;
  div {
    width: 23.25rem;
    margin-left: auto;
    h2 {
      font-size: ${(props) => props.theme.FONT_SIZE['2xl']};
      line-height: ${(props) => props.theme.LINE_HEIGHTS.short};
    }

    p {
      color: ${(props) => props.theme.COLORS['gray-200']};
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 1250px) {
    margin: 0;
  }
`

export const ConnectType = styled.button`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme.COLORS['gray-600']};
  border-radius: ${({ theme }) => theme.RADII.md};
  gap: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme.COLORS['gray-500']};
  }
`
